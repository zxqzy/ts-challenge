type Absolute<T extends number | string> = `${T}` extends `-${infer L}` ? L : `${T}`

type TestAbsolute = -100
type ResultAbsolute = Absolute<TestAbsolute>
