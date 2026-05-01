---
applyTo: "**"
---

# Git flow

## Branches

Each task gets its own branch. The default base is `develop`:

```
git checkout develop
git checkout -b feat/<task-name>
```

Branch naming follows the commit type: `feat/`, `fix/`, `refactor/`, etc.

## Commits

- One commit per logical change — small and descriptive
- Message format: `feat: ...`, `fix: ...`, `refactor: ...` — no scope in parentheses
- Never include `Co-Authored-By` or any AI attribution in commit messages
- Multiple commits per PR are fine when the changes are distinct

## Pull Requests

Create PRs via the `gh` CLI:

```
git push -u origin <branch>
gh pr create --title "..." --base develop --head <branch> --body "..."
gh pr view --web
```

The default base branch for PRs is `develop`. Only use `main` if explicitly requested.

PR body must be written in Portuguese and include:

- O que foi feito
- Quais arquivos foram alterados e por quê
- Notas de comportamento relevantes
