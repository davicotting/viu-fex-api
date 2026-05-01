---
applyTo: "**"
---

# Stack

- **Framework**: NestJS 11, TypeScript strict
- **Database**: PostgreSQL
- **ORM**: Prisma 7 with `@prisma/adapter-pg`
- **Auth**: `better-auth` + `@thallesp/nestjs-better-auth`

## Environment variables

| Variable             | Description                        |
|----------------------|------------------------------------|
| `DATABASE_URL`       | PostgreSQL connection string       |
| `BETTER_AUTH_SECRET` | Secret key for better-auth         |
| `BETTER_AUTH_URL`    | Public base URL of the API         |
