---
applyTo: "**/*.ts"
---

# Functions

Prefer named `function` declarations over `const` arrow functions for top-level and exported logic.

`const` arrow functions are only acceptable for inline callbacks (e.g. inside `.map()`, `.filter()`) or when required by a specific API.

**Wrong:**
```ts
export const findById = async (id: string): Promise<User | null> => { ... }
```

**Right:**
```ts
export async function findById(id: string): Promise<User | null> { ... }
```

Class methods in NestJS (use-cases, repositories, controllers, services) are always written as standard class methods — not arrow properties.
