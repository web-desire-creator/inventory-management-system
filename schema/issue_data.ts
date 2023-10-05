import { doublePrecision, pgTable, serial, varchar,timestamp, integer } from "drizzle-orm/pg-core";
 
export const issue_Data = pgTable('issue_Data', {
  id: serial('id').primaryKey(),
  item_name_id : integer("item_name_id"),
  issued_quantity: doublePrecision('issued_quantity'),
  date: varchar('Date',{length:100}),
  issued_to: varchar('Issued to',{length:255}),
  name_id: integer('name_id')
});
export type item = typeof issue_Data.$inferSelect; // return type when queried
export type Newitem = typeof issue_Data.$inferInsert; // insert types