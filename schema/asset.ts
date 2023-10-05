import { doublePrecision, pgTable, serial, varchar,timestamp, integer } from "drizzle-orm/pg-core";
 
export const asset = pgTable('Asset', {
  id: serial('id').primaryKey(),
  item_name : varchar('Item Name', {length: 20}),
  item_unit_id: integer('item_unit_id'),
  total_quantity: doublePrecision('quantity')
});
export type item = typeof asset.$inferSelect; // return type when queried
export type Newitem = typeof asset.$inferInsert; // insert types