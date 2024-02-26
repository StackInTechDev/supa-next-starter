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
