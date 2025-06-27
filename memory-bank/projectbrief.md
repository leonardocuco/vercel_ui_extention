# Project Brief

This repository provides a small wrapper around the [Vercel AI UI SDK](https://github.com/vercel/ai) so that AI agents can trigger client-side actions while keeping our codebase aligned with the official package. The wrapper exposes a drop-in `useInstrumentedChat` hook which mirrors the behaviour of `useChat` and automatically handles tool calls produced by the LLM.

The main motivation is to let agents visually guide users through the interface without modifying or forking Vercel's code. Our first instrumentation capability is a `highlightLinks` tool that decorates all `<a>` elements whose `href` matches a supplied path. The design keeps all instrumentation in browser code and leaves the server API unchanged except for declaring the tools available to the LLM.

Key objectives:

- Maintain upgrade compatibility with the upstream SDK
- Provide a simple API so product teams can opt in with minimal changes
- Allow additional tools to be registered via a runtime registry
- Keep bundle size small and avoid impacting existing UI performance
