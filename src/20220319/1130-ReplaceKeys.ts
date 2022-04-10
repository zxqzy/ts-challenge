// https://github.com/type-challenges/type-challenges/tree/master/questions/1130-medium-replacekeys
type A = '1' | '2' extends '1' ? true : false

type B = '1' extends '1' | '2' ? true : false

type C = '1' | '3' extends '1' | '2' ? true : false

type D = '1' | '2' extends '1' | '2' ? true : false

type E = true | false


type F = '3' extends '1' | '2' ? true : false

// type ReplaceKeys<U, T extends string, Y extends Record<string, any>> = {
//   [key in keyof U]: key extends T ? T extends key ? T extends keyof Y ?  Y[T]: never: never: U[key]
// }

type ReplaceKeys<U extends unknown, T extends string, Y extends unknown> = {
  [P in keyof U]: P extends T ? P extends keyof Y ? Y[P] : never : U[P]
}

type NodeA = {
  type: 'A'
  name: string
  flag: number
}

type NodeB = {
  type: 'B'
  id: number
  flag: number
}

type NodeC = {
  type: 'C'
  name: string
  flag: number
}


type Nodes = NodeA | NodeB | NodeC

type ReplacedNodes = ReplaceKeys<Nodes, 'name' | 'flag', {name: number, flag: string}>

type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', {aa: number}>


const test: ReplacedNodes = {
  type : 'A',
  name: 1,
  flag: '2'
}

const test1: ReplacedNodes = {
  type : 'B',
  id: 1,
  flag: '2'
}


const test2: ReplacedNodes = {
  type : 'C',
  name: 1,
  flag: '2'
}
