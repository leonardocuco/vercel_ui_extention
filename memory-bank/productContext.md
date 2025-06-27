# Product Context

Teams building user-facing AI assistants on Vercel often want the model to point out relevant UI elements. For example, if the agent suggests navigating to the settings page it should highlight the link so the user can easily find it. The official SDK supports client-side tools via `onToolCall` but leaves implementation details to each consumer.

This wrapper standardises that behaviour. By installing the package and using `useInstrumentedChat`, any team can immediately take advantage of built-in tools (currently just `highlightLinks`) and register their own. The wrapper focuses on a non-intrusive overlay that guides rather than automates navigation. This keeps the user in control while still benefiting from AI-driven hints.

The project deliberately avoids forking the upstream SDK so we can continue upgrading with minimal friction and benefit from community support and security updates.
