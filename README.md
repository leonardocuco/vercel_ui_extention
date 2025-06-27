# Vercel UI Instrumentation Wrapper

This project provides a thin wrapper around the official **@vercel/ai** UI SDK. It allows AI agents to trigger client‑side behaviours such as highlighting links in the page via tool calls, without modifying the upstream SDK.

## Features

* `useInstrumentedChat` – drop‑in replacement for `useChat` that processes tool calls using registered handlers.
* Built‑in `highlightLinks` tool that decorates all links whose `href` contains a specified path.
* Tool registry so additional handlers can be added with `registerToolHandler`.

## Usage

```ts
import { useInstrumentedChat, instrumentationTools } from '@our-sdk/vercel-ui-wrapper/react';

// On the server add instrumentationTools to the tool list when calling streamText

const { messages, handleInputChange, handleSubmit } = useInstrumentedChat();
```

The wrapper injects the required `onToolCall` handler and applies DOM updates in the browser. No configuration is needed for the basic highlight tool.

Additional recipes demonstrating real integrations can be found under the [`cookbook`](./cookbook) directory.
For a quick demonstration of the highlight tool open [`examples/highlight-demo`](./examples/highlight-demo) with `npm run demo`.

## Development

1. Clone the repository
2. Run `npm install` (requires access to the npm registry)
3. Build with `npm run build`

## License

MIT
