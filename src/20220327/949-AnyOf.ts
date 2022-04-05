type ReturnFalseType = [] | null | undefined | 0 | '' | false | Record<any, never>
// type AnyOf<T extends any[]> = T extends [infer F, ...infer L] ? F extends ReturnFalseType ? AnyOf<L> : true : false
type AnyOf<T extends any[]> = T[number] extends ReturnFalseType ? false : true

type Sample1 = AnyOf<[1, "", false, [], {}]>
type Sample2 = AnyOf<[0, "", false, [], []]>
