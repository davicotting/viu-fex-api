---
applyTo: "src/**/*.ts"
---

# Architecture

```
src/
  domain/           # Entities, repository interfaces, value-objects — zero external deps
  application/      # Use-cases, DTOs — depends only on domain/
  infrastructure/   # Prisma repositories, external services — implements domain interfaces
  presentation/     # Controllers, guards, interceptors, decorators — HTTP concerns only
```

## Layer rules

- `domain/` has no NestJS imports and no dependencies on other layers.
- `application/` use-cases are `@Injectable()` classes with a single `execute()` method.
- `infrastructure/` maps Prisma models to domain entities inside the repository — never leak Prisma types to upper layers.
- `presentation/` controllers call use-cases directly — no business logic.

## Naming conventions

- Files: `kebab-case.ts`
- Classes: `PascalCase`
- Use-cases: `<action>-<resource>.use-case.ts` → class `<Action><Resource>UseCase`
- Repository interface: `<resource>.repository.ts` → `IResourceRepository` + `RESOURCE_REPOSITORY` Symbol
- Prisma repository: `prisma-<resource>.repository.ts` → `PrismaResourceRepository`
- Controllers: `<resource>.controller.ts` inside `presentation/controllers/<resource>/`

## Repository pattern

Define interface and injection token in `domain/repositories/<resource>.repository.ts`:
```ts
export const RESOURCE_REPOSITORY = Symbol('IResourceRepository');

export interface IResourceRepository {
  findById(id: string): Promise<Resource | null>;
}
```

Implement in `infrastructure/repositories/prisma-<resource>.repository.ts`.
Register in the feature module:
```ts
{ provide: RESOURCE_REPOSITORY, useClass: PrismaResourceRepository }
```

## Modules

- One `<resource>.module.ts` per feature at `src/` root.
- `PrismaService` is provided locally in each feature module — not global.
