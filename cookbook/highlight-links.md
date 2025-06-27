# Highlight Links Example

This recipe demonstrates how to use `useInstrumentedChat` and the built-in `highlightLinks` tool to help an agent point users to relevant links in the UI.

## Server setup

Include `instrumentationTools` when calling the Vercel AI SDK on the server so the model knows about the tool.

```ts
import { instrumentationTools } from '@our-sdk/vercel-ui-wrapper';
import { streamText } from '@vercel/ai';

export async function POST(req: Request) {
  const body = await req.json();
  const stream = await streamText({
    messages: body.messages,
    tools: instrumentationTools,
  });
  return new Response(stream);
}
```

## Client usage

Use `useInstrumentedChat` instead of `useChat` in your component. The hook automatically maps tool calls to DOM actions.

```tsx
import { useInstrumentedChat } from '@our-sdk/vercel-ui-wrapper/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useInstrumentedChat();

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={handleInputChange} />
      <button type="submit">Send</button>
      {messages.map(m => <div key={m.id}>{m.content}</div>)}
    </form>
  );
}
```

With the tool registered, the agent can highlight links by calling the `highlightLinks` tool with a `path` argument. Any matching `<a>` tags will receive a small colored dot overlay.

You can customise the dot colour by overriding the CSS variable `--instrument-dot-color` on a parent element.
