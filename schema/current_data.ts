import { doublePrecision, pgTable, serial, varchar,timestamp, integer } from "drizzle-orm/pg-core";
 
export const currentdata = pgTable('Current Data', {
  id: serial('id').primaryKey(),
  issue_Data_id: integer('issuedata_id'),
  return_Data_id: integer('returndata_id')
});
export type item = typeof currentdata.$inferSelect; // return type when queried
export type Newitem = typeof currentdata.$inferInsert; // insert types