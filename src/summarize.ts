/**
 * [] 能够赋值给任意类型的数组，除了 never[]
 */
type Is = [] extends never[] ? true : false // true
const aa: string[] = []

/**
 * never:
 * 1. 在遍历对象时，可以让某些 key 不出现在最终的对象类型中 ([key in keyof obj])
 * 2. 联合类型中，用来省略一些类型
 * 总结：与条件类型合用时，false 的分支用 never 可以用来省略一部份类型
 *
 * Record<string, never> 可以用来表达 {}
 */
type MyExclude<T, U> = T extends U ? never : T

/**
 * infer:
 * 用于类型推断，被推断的类型只能出现在为 true 的分支
 */
type FirstOfArray<T extends any[]> = T extends [infer F] ? F : never
type Pop<T extends any[]> = T extends [...infer F, infer _] ? F : never

/**
 * 递归:
 *
 */
type DeepReadOnly<T extends Record<any, any>> = {
  readonly [k in keyof T] : T[k] extends Record<any, any> ? DeepReadOnly<T[k]> : T[k]
}
type Unique1<T extends readonly any[]> = T extends [infer F, ...infer R]
    ? F extends R[number]
        ? [...Unique1<R>]
        : [F, ...Unique1<R>]
    : []

/**
 * 联合类型的 extends 会分别继承，比如
 * T extends U ? X : Y，T 是 A | B | C ，会被解析成：(A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)
 */
 type LookUp1<T extends { type: string }, U extends string> = T extends { type: U } ? T : never

 type IsUnion2<T> =
 T[] extends (T extends any ? T[] : never)
 ? false
 : true

 type IsUnion3<T, U = T> = T extends U ? [U] extends [T] ? false : true :never

 /**
  * 可以借助第三个变量
  */
type DropChar1<T extends string, U extends string, V extends string = ''> = T extends `${infer F}${infer L}`
  ? F extends U ? DropChar<L, U,`${V}`> : DropChar<L, U, `${V}${F}`> : V
