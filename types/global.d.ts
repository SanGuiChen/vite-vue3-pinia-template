import type { ComponentPublicInstance, FunctionalComponent } from 'vue';

declare global {
  export type Recordable<T = any> = Record<string, T>;

  export interface ViteEnv {
    VITE_PORT: number;
    VITE_USE_MOCK: boolean;
    VITE_PUBLIC_PATH: string;
    VITE_PROXY: [string, string][];
    VITE_GLOB_APP_TITLE: string;
  }
}
declare module 'qs';
declare module 'vue' {
  export type JSXComponent<Props = any> =
    | (new () => ComponentPublicInstance<Props>)
    | FunctionalComponent<Props>;
}
