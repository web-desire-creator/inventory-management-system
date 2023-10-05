import { doublePrecision, pgTable, serial, varchar,timestamp, integer } from "drizzle-orm/pg-core";
 
export const recordofasset = pgTable('recordofasset', {
  id: serial('id').primaryKey(),
  item_name_id : integer('item_name_id'),
  issuerecord_id : integer('issuerecord_id'),
  returnrecord_id:integer('returnrecord_id')
});
export type item = typeof recordofasset.$inferSelect; // return type when queried
export type Newitem = typeof recordofasset.$inferInsert; // insert types