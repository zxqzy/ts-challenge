
// 有问题
// type DeepReadonly<T> = T[keyof T] extends Record<string, any> ? DeepReadonly<T[keyof T]> : {readonly [ key in keyof T]: T[key]}

// type DeepReadonly<T> = {readonly [key in keyof T]: (keyof T[key]) extends never ? T[key] : DeepReadonly<T[key]>}

// type DeepReadonly<T> = {readonly [key in keyof T]: T[key] extends number | string | symbol | Function ? T[key] : DeepReadonly<T[key]>}

type DeepReadonly<T> = {readonly [key in keyof T]: T[key] extends Record<string, any> ?  DeepReadonly<T[key]> : T[key]}

type Other = {
  a: {
    b: string
    c: {
      a: string
      b: number
    }
  },
  b: number
}

type Deepedother = DeepReadonly<Other>

const deep: Deepedother = {
  a: {
    b: '1',
    c: {
      a: '2',
      b: 3,
    }
  },
  b: 2
}

// deep.a.c.a = '3'

// deep.b = '4'
