import { metadata } from "@/app/layout";
import { integer, pgTable, varchar, json, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
});

export const HistoryTable = pgTable('historyTable', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    recordId: varchar({ length: 255 }).notNull(),
    content: json(),
    userEmail: varchar({ length: 255 }).references(() => usersTable.email),
    createdAt: timestamp().defaultNow(),
    aiAgentType:varchar(),
    metaData:varchar()
});