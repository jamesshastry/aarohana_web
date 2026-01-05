# Aarohana - AI Leadership Coaching Platform

## Overview
Aarohana is a leadership coaching platform that combines AI-powered guidance with proven frameworks. It's a React/TypeScript frontend with an Express backend serving on port 5000.

## Architecture

### Frontend
- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS v4 with Radix UI components
- **Build Tool**: Vite 7
- **Routing**: Wouter
- **State Management**: TanStack React Query

### Backend
- **Framework**: Express.js
- **Database**: PostgreSQL (Neon serverless) via Drizzle ORM
- **Server**: Combined frontend + API server on port 5000

### Project Structure
```
client/          # React frontend
  src/
    components/  # UI components
    pages/       # Page components
    hooks/       # React hooks
    lib/         # Utilities and API client
server/          # Express backend
  app.ts         # Express app setup
  routes.ts      # API routes
  storage.ts     # Database storage layer
  index-dev.ts   # Development server with Vite HMR
  index-prod.ts  # Production server with static files
shared/          # Shared code between client/server
  schema.ts      # Drizzle database schema
db/              # Database connection
```

## Development

### Commands
- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push schema changes to database
- `npm run check` - TypeScript type checking

### Environment Variables
- `DATABASE_URL` - PostgreSQL connection string
- `PORT` - Server port (defaults to 5000)

## Database Schema
- **users** - User accounts with authentication
- **leads** - Email leads from early access signups

## API Endpoints
- `POST /api/leads` - Create a new lead from early access form
