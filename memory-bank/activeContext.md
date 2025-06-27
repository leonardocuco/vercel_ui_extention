# Active Context

We have established the basic project scaffolding and a functional wrapper implementation. Key components include:

- **Wrapper API** – `useInstrumentedChat` wraps Vercel's `useChat` to intercept tool calls. Developers can register new tools via `registerToolHandler`.
- **Default Tool** – the built-in `highlightLinks` tool scans the current document for anchor tags whose `href` includes a path and adds an indicator dot using a CSS class.
- **Testing Setup** – a small unit test suite exercises both the highlight function and the hook's ability to invoke registered handlers.
- **Continuous Integration** – GitHub Actions installs dependencies, runs the TypeScript build, and executes the tests on every pull request.

At this stage the project serves as a reference implementation. Planned work includes:

1. Expanding documentation with practical integration steps and more cookbook examples.
2. Allowing custom theming for highlight styles via CSS variables or configuration.
3. Designing additional tools (e.g. scrolling, generic element highlighting) and validating them across frameworks.
