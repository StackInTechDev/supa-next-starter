# supa-next-starter

Kickstart your web development with this comprehensive starter template that combines the power of [Supabase](https://supabase.com/docs), [Next.js](https://nextjs.org/docs), [trpc](https://trpc.io/docs/), and [Prisma](https://www.prisma.io/docs). Quickly set up a robust foundation for your project with authentication, efficient data fetching, and database integration.

## Quick Start

To get it running, follow the steps below:

### 1. Setup dependencies

    # Install dependencies
    pnpm i

    # Configure environment variables
    # There is an `.env.example` in the root directory you can use for reference
    cp .env.example .env

    # Start supabase services
    pnpm supabase start

    # Push the drizzle schema to the database
    pnpm db:push

### 2. Start the development server

    pnpm run dev

        anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0

service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU
