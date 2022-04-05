type MyExclude<T, U> = T extends U ? never : T

type Pop<T extends any[]> = T extends [...infer R, infer L] ? R : never

type Test = [1, 2, 3]

type A = Pop<Test>

const a: A= [1, 2]
