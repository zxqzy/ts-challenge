// type Flatten<T extends any[]> =
//   T[number] extends Record<string, any> ? Flatten<T[number]> : [T[number]]

// type Flatten<T> = T extends [infer First, ...infer Rest]
//   ? [...Flatten<First>, ...Flatten<Rest>]
//   : T extends [] ? T : [T]

// type Flatten<T extends any[]> =
//  T extends [infer F,...infer R]
//   ? F extends any[]
//   ? [...Flatten<F>,...Flatten<R>] : [F,...Flatten<R>] : T

// 多判断了一下尾数
// type Flatten<T extends any[]> = T extends [infer F, ...infer R]
// ? F extends any[]
//   ? R['length'] extends 0
//     ? [...Flatten<F>]
//     : [...Flatten<F>, ...Flatten<R>]
//   : [F,...Flatten<R>]
// : []

// 没看懂？？？

type Flatten<T extends readonly unknown[], Result extends readonly unknown[] = []> =
  T extends [infer A, ...infer B]
    ? Flatten<B, A extends readonly unknown[] ? Flatten<A, Result> : [...Result, A]>
    : Result

  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>

  type is<T>  = T extends [] ? number : string

  type a = is<1>
  type b = is<any>
