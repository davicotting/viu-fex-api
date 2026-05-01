---
applyTo: "**"
---

# Error handling

If an error occurs during a change, do not deliver the solution with the error.
Before deciding how to fix it, ask the user for direction first.
Only deliver when the solution is working.

In application code, use NestJS built-in HTTP exceptions (`NotFoundException`, `BadRequestException`, `UnauthorizedException`, etc.) — never throw plain `Error` objects from use-cases or controllers.
