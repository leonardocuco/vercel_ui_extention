declare module '@vercel/ai/react' {
  export interface ToolCall {
    toolName: string;
    args: any;
  }
  export type ToolCallHandler = (toolCall: ToolCall) => Promise<any> | any;
  export interface UseChatOptions {
    onToolCall?: ToolCallHandler;
    [key: string]: any;
  }
  export function useChat(options: UseChatOptions): any;
}

declare module 'zod' {
  export type ZodTypeAny = any;
  export const z: any;
}
