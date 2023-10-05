import { doublePrecision, pgTable, serial, varchar,timestamp, integer } from "drizzle-orm/pg-core";
 
export const previllage = pgTable('previllage', {
  id: serial('id').primaryKey(),
  previllage : varchar('Previllage', {length: 20})
});
export type item = typeof previllage.$inferSelect; // return type when queried
export type Newitem = typeof previllage.$inferInsert; // insert types