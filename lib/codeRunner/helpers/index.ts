export function multipleArgsCallbackifier<T>(arg0: any, func: (...ar: any[]) => Promise<T>, ...args: any[]): Promise<T> {
  let p: Promise<T>;
  if (typeof args[0] === 'object') {
    p = func(arg0, args[0]);
  }
  else {
    p = func(arg0);
  }

  if (typeof args[0] === 'function') {
    p
    .then(result => {
        args[0](undefined, result);
    })
    .catch((err: Error) => {
        args[0](err);
    });
  }
  else if (typeof args[1] === 'function') {
    p
    .then(result => {
        args[1](undefined, result);
    })
    .catch((err: Error) => {
        args[1](err);
    });
  }
  return p;
}
