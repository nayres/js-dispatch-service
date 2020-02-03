export interface LanguageExtMap {
  node:string;
}

export interface Options {
  timeout?: number;
  stdin?: string;
  compileTimeout?: number;
  compilationPath?: string;
  executionPath?: string;
}

export interface Result {
  stdout: string;
  stderr: string;
  exitCode: number;
  memoryUsage: number;
  cpuUsage: number;
  errorType?: 'compile-time' | 'run-time' | 'pre-compile-time';
}

export type errorResultCallback = (err: Error | undefined, res?: Result) => void;