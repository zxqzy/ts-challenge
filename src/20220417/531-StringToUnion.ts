type StringToUnion<T extends string> = T extends `${infer F}${infer L}` ? F | StringToUnion<L> : never

type StringToUnionTest = '123'
type StringToUnionResult = StringToUnion<StringToUnionTest>


type StringTest = '1' extends `${infer F}${infer L}` ? true : false // true