import type { Config } from "drizzle-kit";
 
export default {
  schema: "./schema/*",
  out: "./drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: "postgresql://postgres:12345@localhost:5432/postgres",
  }
} satisfies Config;