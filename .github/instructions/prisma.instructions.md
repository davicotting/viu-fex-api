---
applyTo: "prisma/**,src/infrastructure/**/*.ts"
---

# Prisma

- Schema: `prisma/schema.prisma`
- After changing the schema always create a migration: `npx prisma migrate dev --name <description>`
- Map model names to snake_case table names with `@@map("table_name")`.
- IDs are `String @id` (no auto-increment).
- Map Prisma models to domain entities inside the repository — never return raw Prisma types to upper layers.
