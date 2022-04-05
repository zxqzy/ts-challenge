type DropChar<T extends string, U extends string, V extends string = ''> = T extends `${infer F}${infer L}`
  ? F extends U ? DropChar<L, U,`${V}`> : DropChar<L, U, `${V}${F}`> : V

type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'