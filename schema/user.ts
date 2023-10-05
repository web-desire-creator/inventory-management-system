import { doublePrecision, pgTable, serial, varchar,timestamp, integer } from "drizzle-orm/pg-core";
 
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: integer('Pin Number').notNull(),
  password: varchar('password', {length:255}).notNull(),
  name: varchar('name',{length:100}).notNull(),
  image : varchar('Image Url', {length: 255}),
  previlige_id : integer('previllage_id').default(1)
});
export type item = typeof users.$inferSelect; // return type when queried
export type Newitem = typeof users.$inferInsert; // insert types