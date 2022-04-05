type Unique<T extends readonly any[]> = T extends [infer F, ...infer R]
    ? F extends R[number]
        ? [...Unique<R>]
        : [F, ...Unique<R>]
    : [];

type R = Unique<[1, 1, 2, 2, 3, 3]>
type R1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>
type R2 = Unique<[1, "a", 2, "b", 2, "a"]>
