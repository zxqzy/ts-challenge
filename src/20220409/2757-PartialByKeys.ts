type Copy<T> = {
  [k in keyof T] : T[k]
}

// type PartialByKeys<T, U = keyof T> = Copy<Omit<T, keyof T & U> & {
//   [k in keyof T & U]? : T[k]
// }>

type PartialByKeys<T, U extends string | number | symbol = keyof T> = Copy<{
  [k in keyof T as k extends U ? k : never]? : T[k]
} & Omit<T, U>>

interface User {
  name: string
  age: number
  address: string
}

type UserPartialName = PartialByKeys<User, 'name'>
