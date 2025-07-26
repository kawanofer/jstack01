import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
//
// No additional code is needed here.
// Make sure to run drizzle-kit commands with the correct config path:
// npx drizzle-kit push --config=src/db/drizzle.config.ts
//