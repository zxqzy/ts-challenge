type MyTupleToUnionArr<T extends any[]> = T[number]

type Arr = ['1', '2', '3']
type Test = MyTupleToUnionArr<Arr>
