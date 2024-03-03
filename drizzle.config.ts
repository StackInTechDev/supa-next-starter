import { env } from "@/env";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/server/db/schema",
  driver: "pg",
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  tablesFilter: ["supa_*"],
} satisfies Config;
