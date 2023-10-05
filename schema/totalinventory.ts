import { doublePrecision, pgTable, serial, varchar,timestamp, integer } from "drizzle-orm/pg-core";
 
export const totalinventory = pgTable('Total Inventory', {
  id: serial('id').primaryKey(),
  item_name_id : integer("item_name_id"),
  catagory_id: integer('catagory_id'),
  typeofasset_id: integer('typeofasset_id'),
  issue_data_id: integer('issue_data_id'),
  returningdata_id: integer('returningdata_id'),
});
export type item = typeof totalinventory.$inferSelect; // return type when queried
export type Newitem = typeof totalinventory.$inferInsert; // insert types