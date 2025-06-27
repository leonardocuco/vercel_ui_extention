import { useChat } from '@vercel/ai/react';
import { z } from 'zod';
const registry = new Map();
export function registerToolHandler(name, schema, handler) {
    registry.set(name, { schema, handler });
}
function ensureHighlightStyle() {
    if (document.getElementById('instrument-style'))
        return;
    const style = document.createElement('style');
    style.id = 'instrument-style';
    style.textContent = `
.instrument-highlight {
  position: relative;
}
.instrument-highlight::after {
  content: '';
  position: absolute;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--instrument-dot-color, #f00);
  z-index: var(--instrument-dot-z, 1000);
}
`;
    document.head.appendChild(style);
}
function highlightLinks({ path }) {
    ensureHighlightStyle();
    const links = Array.from(document.querySelectorAll('a[href]'));
    for (const link of links) {
        try {
            if (link.href.includes(path)) {
                link.classList.add('instrument-highlight');
            }
        }
        catch {
            // ignore malformed URLs
        }
    }
    return 'links highlighted';
}
export const instrumentationTools = [
    {
        name: 'highlightLinks',
        description: 'Highlight links in the UI matching a path',
        parameters: z.object({ path: z.string() })
    }
];
// Register default highlightLinks tool
registerToolHandler('highlightLinks', instrumentationTools[0].parameters, highlightLinks);
export function useInstrumentedChat(options = {}) {
    const onToolCall = async (toolCall) => {
        const handler = registry.get(toolCall.toolName);
        if (handler) {
            const parsed = handler.schema.safeParse(toolCall.args);
            if (!parsed.success) {
                return { error: { message: 'Invalid tool args' } };
            }
            try {
                return await handler.handler(parsed.data);
            }
            catch (err) {
                return { error: { message: err.message } };
            }
        }
        if (options.onToolCall) {
            return options.onToolCall(toolCall);
        }
        return { error: { message: `No handler for ${toolCall.toolName}` } };
    };
    return useChat({ ...options, onToolCall });
}
export { z } from 'zod';
export { highlightLinks };
