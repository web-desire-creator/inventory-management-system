import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
 
export const typeofassets = pgTable('typeofassets', {
  id: serial('id').primaryKey(),
  type: varchar("type", {length:20}) 
});
export type item = typeof typeofassets.$inferSelect; // return type when queried
export type Newitem = typeof typeofassets.$inferInsert; // insert types