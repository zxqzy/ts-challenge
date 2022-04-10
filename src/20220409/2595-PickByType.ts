// as 的用途: 后面可以跟一定的条件语句，用来做对象 key 的筛选
type PickByType<T extends Record<string, any>, U> = {
  [ key in keyof T as T[key] extends U ? key : never ] : T[key]
}

type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean>

type AAA = Pick<{ a: 1, b: 1 }, 'a'>
