// type LastOfArr<T extends any[]> = [undefined, ...T][T['length']]

type LastOfArr<T extends any[]> = T extends [...infer _, infer L] ? L : never

// test
type arr1 = ['a', 'b', 'c']
type Tail1 = LastOfArr<arr1>
