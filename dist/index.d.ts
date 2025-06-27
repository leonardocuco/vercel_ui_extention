import { UseChatOptions } from '@vercel/ai/react';
import { ZodTypeAny } from 'zod';
export interface ToolHandler {
    schema: ZodTypeAny;
    handler: (args: any) => Promise<any> | any;
}
export declare function registerToolHandler(name: string, schema: ZodTypeAny, handler: (args: any) => Promise<any> | any): void;
declare function highlightLinks({ path }: {
    path: string;
}): string;
export declare const instrumentationTools: {
    name: string;
    description: string;
    parameters: any;
}[];
export interface InstrumentedChatOptions extends UseChatOptions {
}
export declare function useInstrumentedChat(options?: InstrumentedChatOptions): any;
export { z } from 'zod';
export { highlightLinks };
