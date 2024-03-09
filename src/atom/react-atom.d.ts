declare global {
  interface GlobalThis {
    __atoms__: { [key: string]: any } | undefined;
  }
}

export {};

declare global {
  interface Window {
    __atoms__: { [key: string]: any } | undefined;
  }
}
