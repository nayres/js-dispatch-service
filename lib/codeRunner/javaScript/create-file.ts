import { errorResultCallback, Result, Options } from "../types";
import path from 'path';
import { multipleArgsCallbackifier } from "../helpers";
import { execute } from "../execute";

export function runNodeFile(filePath: string, options: Options, callback: errorResultCallback): Promise<Result>;

export function runNodeFile(filePath: string, callback: errorResultCallback): Promise<Result>;

export function runNodeFile(filePath: string, options?: Options): Promise<Result>;

export async function runNodeFile(filePath: string, ...args: any[]): Promise<Result> {
    return multipleArgsCallbackifier<Result>(filePath, runNodeFileAndReturnPromise, ...args);
};

async function runNodeFileAndReturnPromise(filePath: string, options?: Options): Promise<Result> {
    filePath = path.resolve(filePath);
    const executionPath = options && options.executionPath || 'node';
    let res = await execute(executionPath, [filePath], options);
    if (res.exitCode != 0) {
        res.errorType = 'run-time';
    }
    return res;
};
