CREATE SCHEMA "catalog";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "catalog"."track" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" text NOT NULL,
	"description" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"artist" text NOT NULL,
	"source" text NOT NULL
);
