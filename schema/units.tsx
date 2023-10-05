import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
 
export const units = pgTable('units', {
  id: serial('id').primaryKey(),
  unit: varchar("unit", {length:50}) 
});
export type item = typeof units.$inferSelect; // return type when queried
export type Newitem = typeof units.$inferInsert; // insert types