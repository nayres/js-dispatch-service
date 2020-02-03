import { Result, Options, errorResultCallback } from '../types';
import { writeSourceFile } from "../write-source/writeSource";
import { runNodeFile } from "./create-file";
import { multipleArgsCallbackifier } from "../helpers";

export function runNodeSourceCode(soureCode: string, options: Options, callback: errorResultCallback): Promise<Result>;

export function runNodeSourceCode(soureCode: string, callback: errorResultCallback): Promise<Result>;

export function runNodeSourceCode(soureCode: string, options?: Options): Promise<Result>;

export async function runNodeSourceCode(soureCode: string, ...args: any[]): Promise<Result> {
    return multipleArgsCallbackifier<Result>(soureCode, runNodeSourceCodeAndReturnPromise, ...args);
};

async function runNodeSourceCodeAndReturnPromise(soureCode: string, options?: Options): Promise<Result> {
    let filePath = await writeSourceFile('node', soureCode);
    return runNodeFile(filePath, options);
};
