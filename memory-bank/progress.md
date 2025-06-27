# Project Progress

This log summarises the main repository milestones and serves as a history of how the wrapper evolved.

## 2025‑06‑27
- Initialized the repository with a minimal README.
- Implemented the wrapper library exposing `useInstrumentedChat` and the built-in `highlightLinks` tool.
- Added TypeScript build configuration and published compiled output to `dist/`.
- Created a unit test suite verifying the highlight logic and hook integration.
- Wrote the first cookbook entry showing how to use the wrapper in a basic setup.
- Configured a GitHub Actions workflow to run `npm ci`, `npm run build`, and `npm test` for every pull request.

## 2025-06-28
- Adjusted the CI workflow to skip `npm install` because dependencies are checked
  into version control. This prevents network failures during automated tests.
