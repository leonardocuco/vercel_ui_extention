# System Patterns

The repository follows a straightforward structure to keep the wrapper small and easy to reason about.

* **Language & Build** – All source files live under `src/` and are written in TypeScript. The `tsc` compiler outputs ESM modules to `dist/` which are published as the package entry points.
* **Tool Registry** – A global `Map` keeps track of tool names associated with a `zod` schema and handler function. The `registerToolHandler` helper populates this registry. At runtime `useInstrumentedChat` looks up handlers by name when the SDK reports a tool call.
* **Style Injection** – The first call to `highlightLinks` inserts a small CSS block defining the `.instrument-highlight` class. Subsequent calls reuse it so we avoid duplicate styles.
* **Testing** – Node's built-in test runner exercises pure functions. DOM-dependent logic uses simple mocks so the tests run in Node without a browser.
* **CI Pipeline** – GitHub Actions installs dependencies, compiles TypeScript, and runs the tests for each pull request targeting `main`.
* **Distribution** – The package is ESM-only and exposes its types via generated declaration files. Consumers install it from npm and import the wrapper just like any other library.
