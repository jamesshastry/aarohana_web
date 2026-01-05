import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { drizzle } from "drizzle-orm/neon-serverless";
import { leads } from "../../shared/schema";
import { z } from "zod";

const insertLeadSchema = z.object({
  email: z.string().email(),
  source: z.string(),
});

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const validatedData = insertLeadSchema.parse(body);

    if (!process.env.DATABASE_URL) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Database not configured" }),
      };
    }

    const db = drizzle(process.env.DATABASE_URL);
    
    const result = await db.insert(leads).values({
      email: validatedData.email,
      source: validatedData.source,
    }).returning();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ success: true, lead: result[0] }),
    };
  } catch (error) {
    console.error("Error creating lead:", error);
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, error: "Invalid data" }),
    };
  }
};

export { handler };
