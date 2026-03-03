declare global {
  interface NodeRequire {
    context: (path: string, recursive?: boolean, regExp?: RegExp) => any;
  }
}

export {};
