type MyChainable<T extends {} = {}> = {
  option<K extends string|symbol|number, V>(key: K, value: V): MyChainable<T & {[key in K]: V}>
  get(): T
}

// type MyChainable<T extends {} = {}> = {
//   option<K extends string|symbol|number, V>(key: K, value: V): MyChainable<T & Record<K, V>>
//   get(): T
// }

declare const a: MyChainable

const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type Expected = typeof result