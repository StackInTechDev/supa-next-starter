import { pgTableCreator } from 'drizzle-orm/pg-core';

export const pgTable = pgTableCreator((name) => `supa_${name}`);
