import { PrismaClient } from "@prisma/client";

import { env } from "@/env";
import { SupabaseRowLevelSecurity } from "../../prisma/SupabaseRowLevelSecurity";

const createPrismaClient = () =>
  new PrismaClient({
    datasources: { db: { url: env.RLS_DATABASE_URL } },
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  }).$extends(SupabaseRowLevelSecurity());

const globalForPrisma = globalThis as unknown as {
  prisma: ReturnType<typeof createPrismaClient> | undefined;
};

export const db = globalForPrisma.prisma ?? createPrismaClient();

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;
