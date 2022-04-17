type ToObject<T> = {
  [key in keyof T]: T[key]
}

// type AppendToObject<T extends Record<any, any>, K extends string | number | symbol, V> = ToObject<{
//   [key in keyof T]: T[key]
// } & { [key in K]: V }>

type AppendToObject<T extends Record<any, any>, K extends string | number | symbol, V> = {
  [key in keyof T | K]: key extends keyof T ? T[key] : V
}

type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4>
