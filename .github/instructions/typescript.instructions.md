---
applyTo: "**/*.ts"
---

# TypeScript

## Type assertions

Never use `as` to cast types. Always model the correct type explicitly.

**Wrong:**
```ts
const user = response as User;
const repo = this.repo as IUserRepository;
```

**Right:**
```ts
const user: User = new User(
  response.id,
  response.name,
  response.email,
  response.emailVerified,
  response.image,
  response.createdAt,
  response.updatedAt,
);
```

If a type cast with `as` seems necessary, stop and fix the underlying type instead.

Never use `as const`. Type the value explicitly with a proper type or interface.

## Strict typing

- Always type function parameters and return values explicitly.
- Never use `any`. Use `unknown` at system boundaries and narrow with guards.
- Prefer `interface` for object shapes that represent domain contracts; use `type` for unions, intersections, and aliases.
