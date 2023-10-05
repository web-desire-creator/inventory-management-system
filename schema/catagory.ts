import { doublePrecision, pgTable, serial, varchar,timestamp, integer } from "drizzle-orm/pg-core";
 
export const catagory = pgTable('Catagory', {
  id: serial('id').primaryKey(),
  catagory : varchar('Catagory', {length: 20})
});
export type item = typeof catagory.$inferSelect; // return type when queried
export type Newitem = typeof catagory.$inferInsert; // insert types