// 不知道的点： 如何匹配空格
type TWhitespace = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${TWhitespace}${infer U}` ? TrimLeft<U> : S
type TrimRight<S extends string> = S extends `${infer U}${TWhitespace}` ? TrimRight<U> : S

type Trim<S extends string> = TrimRight<TrimLeft<S>>

type trimed = Trim<'  Hello World  '>
