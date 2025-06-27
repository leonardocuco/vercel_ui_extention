# Technical Context

- **Languages**: TypeScript for library code, JavaScript for tests.
- **Runtime**: Node.js v18+ is required for the build and test process. The distributed code is ESM and runs in modern browsers.
- **Dependencies**:
  - `@vercel/ai` provides the base `useChat` hook and types.
  - `zod` is used to define and validate tool argument schemas.
- **Development Workflow**: `npm run build` compiles TypeScript using `tsc`. `npm test` runs the Node test runner.
- **Repository Layout**:
  - `src/` – TypeScript sources
  - `dist/` – compiled JavaScript and declarations
  - `cookbook/` – practical integration examples
  - `memory-bank/` – project context documents
- **Continuous Integration**: GitHub Actions installs dependencies, builds the project and runs the tests on every pull request.
