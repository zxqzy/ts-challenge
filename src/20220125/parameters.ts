type MyParameters<T extends (...args: any[]) => any>
 = T extends (...args: infer P) => any ? P : never

 declare function f1(arg: { a: number; b: string }): void;

 type Params = MyParameters<typeof f1>
