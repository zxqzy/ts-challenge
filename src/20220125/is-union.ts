type IsUnion<T> =
  T[] extends (T extends any ? T[] : never)
  ? false
  : true;

type MyArray<T> = T[]
type ArrayT = MyArray<string | number> // Array<string | number>
type TTTT = Array<string | number> extends Array<string> | Array<number> ? true : false // false
type TReverse = Array<string> | Array<number> extends Array<string | number> ? true : false // true

// type IsUnion<T, U = T> = T extends U ? [U] extends [T] ? false : true :never

type Gg = string extends string | number ? [string | number] extends [string] ? false : true : never | number extends string | number ? [string | number] extends [string] ? false : true : never


type case1 = IsUnion<string>
type case2 = IsUnion<string|number>
type case3 = IsUnion<[string|number]>

// 为什么推出来是联合类型
type T = any extends string ? number : string

type TTT = string | boolean extends string | boolean ? number : string

type Te = string[]

type TT = string[] extends string[] ? number : string

type Aa = string | number
type Bb = Aa[]
const s:Bb = ['2', 1, '3']

type Sa =
[string] extends [string | number]
  ? false
  : true;


type N<T, U = T> = [U]

type L = N<number | string>

const la: L = [1]

// 特别巧妙的运用了继承

type NNN = never extends never ? true : false