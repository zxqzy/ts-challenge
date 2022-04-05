type Unshift<T extends any[], U> = [U, ...T]

// test
type Result = Unshift<[1, 2], 0>
