type TupleToObject<T extends ReadonlyArray<any>> = {
  [key in T[number]]: key
}

const tuple = [1, 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple>
