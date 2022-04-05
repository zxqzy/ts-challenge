// type RemoveIndexSignature<T extends Record<string, any>> = {
//   [key in keyof T as [T[key]] extends [undefined] ? never : key] : T[key]
// }

type RemoveIndexSignature<T extends Record<string, any>> = {
  [key in keyof T as key extends `${infer String}` ? String : never] : T[key]
}

type Foo = {
  [key: string]: any;
  foo(): void;
}

type AA = RemoveIndexSignature<Foo>  // expected { foo(): void }
