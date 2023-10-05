import { doublePrecision, pgTable, serial, varchar,timestamp, integer } from "drizzle-orm/pg-core";
 
export const returningdata = pgTable('returningdata', {
  id: serial('id').primaryKey(),
  item_name_id : integer("item_name_id"),
  return_quantity: doublePrecision('issued_quantity'),
  date: varchar('Date',{length:100}),
  issued_to_id: integer('issued_to_id'),
  name_id: integer('name_id')
});
export type item = typeof returningdata.$inferSelect; // return type when queried
export type Newitem = typeof returningdata.$inferInsert; // insert types