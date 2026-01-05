import { Octokit } from '@octokit/rest';
import * as fs from 'fs';
import * as path from 'path';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }

  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? 'repl ' + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
      ? 'depl ' + process.env.WEB_REPL_RENEWAL
      : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

const REPO_OWNER = 'jamesshastry';
const REPO_NAME = 'website';

const IGNORE_PATTERNS = [
  'node_modules',
  '.git/',
  'dist/',
  '.replit',
  'replit.nix',
  '/.config/',
  '.upm',
  'package-lock.json',
  '.cache/',
  'migrations/',
  '/tmp/',
  '.local/',
  'generated_images/professional_headshot',
];

function shouldIncludeFile(filePath: string): boolean {
  return !IGNORE_PATTERNS.some(pattern => filePath.includes(pattern));
}

function getAllFiles(dir: string, baseDir: string = dir): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (!shouldIncludeFile(relativePath)) continue;

    if (entry.isDirectory()) {
      files.push(...getAllFiles(fullPath, baseDir));
    } else {
      files.push(relativePath);
    }
  }

  return files;
}

async function createBlobWithRetry(octokit: Octokit, owner: string, repo: string, content: string, encoding: 'utf-8' | 'base64', maxRetries = 3): Promise<string> {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const { data: blob } = await octokit.git.createBlob({
        owner,
        repo,
        content,
        encoding,
      });
      return blob.sha;
    } catch (error) {
      if (attempt === maxRetries) throw error;
      console.log(`  Retry ${attempt}/${maxRetries}...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
  throw new Error('Failed to create blob');
}

async function main() {
  console.log('Getting GitHub client...');
  const octokit = await getUncachableGitHubClient();

  console.log('Getting current repository contents...');

  const { data: repo } = await octokit.repos.get({
    owner: REPO_OWNER,
    repo: REPO_NAME,
  });

  const defaultBranch = repo.default_branch;
  console.log(`Default branch: ${defaultBranch}`);

  let baseSha: string | undefined;
  try {
    const { data: ref } = await octokit.git.getRef({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      ref: `heads/${defaultBranch}`,
    });
    baseSha = ref.object.sha;
    console.log(`Current commit: ${baseSha}`);
  } catch (e) {
    console.log('No existing commits, creating initial commit...');
  }

  const projectDir = process.cwd();
  const files = getAllFiles(projectDir);
  console.log(`Found ${files.length} files to upload`);

  const treeItems: Array<{ path: string; mode: '100644'; type: 'blob'; sha: string }> = [];

  for (const filePath of files) {
    const fullPath = path.join(projectDir, filePath);
    const content = fs.readFileSync(fullPath);
    const isText = !filePath.match(/\.(png|jpg|jpeg|gif|ico|pdf|woff|woff2|ttf|eot)$/i);

    console.log(`Uploading: ${filePath}`);

    const sha = await createBlobWithRetry(
      octokit,
      REPO_OWNER,
      REPO_NAME,
      isText ? content.toString('utf-8') : content.toString('base64'),
      isText ? 'utf-8' : 'base64'
    );

    treeItems.push({
      path: filePath,
      mode: '100644',
      type: 'blob',
      sha,
    });
  }

  console.log('Creating tree...');
  const { data: tree } = await octokit.git.createTree({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    tree: treeItems,
  });

  console.log('Creating commit...');
  const { data: commit } = await octokit.git.createCommit({
    owner: REPO_OWNER,
    repo: REPO_NAME,
    message: 'Replace Hugo site with React app - Aarohana website',
    tree: tree.sha,
    parents: baseSha ? [baseSha] : [],
  });

  console.log('Updating branch reference...');
  try {
    await octokit.git.updateRef({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      ref: `heads/${defaultBranch}`,
      sha: commit.sha,
      force: true,
    });
  } catch (e) {
    await octokit.git.createRef({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      ref: `refs/heads/${defaultBranch}`,
      sha: commit.sha,
    });
  }

  console.log(`\n✅ Successfully pushed to https://github.com/${REPO_OWNER}/${REPO_NAME}`);
  console.log(`Commit SHA: ${commit.sha}`);
}

main().catch(console.error);
