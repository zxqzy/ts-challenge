type AppendArgument<Fn, A> = Fn extends (...args: infer P) => infer R
  ? (...args: [...P, A]) => R : Fn

  type Fn = (a: number, b: string) => number

  type Result = AppendArgument<Fn, boolean>
