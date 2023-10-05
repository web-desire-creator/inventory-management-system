CREATE TABLE IF NOT EXISTS "returnData" (
	"id" serial PRIMARY KEY NOT NULL,
	"item_name" varchar(50) NOT NULL,
	"quantity" double precision NOT NULL,
	"date" timestamp,
	"issued_to" varchar(50) NOT NULL
);
