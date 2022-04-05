type EndsWith<T extends string, U extends string> =
  T extends `${ infer P }${U}` ? true : false

// type EndsWith<T extends string, U extends string> = T extends `${string}${U}` ? true : false

// test
type str1 = 'abcde'
type str2 = 'bcde'
type str3 = 'cdef'
type EndsWithTest = EndsWith<str1, str2>
type EndsWithTest1 = EndsWith<str1, str3>

type SS = str1 extends 'abcde' ? true : false

// 字符串的继承，只有相等时才继承


declare function foo(x: string): number;
declare function foo(x: number): string;
declare function foo(x: string | number): string | number;
type T30 = ReturnType<typeof foo>; // string | number

// infer: 用于条件语句中
// 条件语句： T extends U ? X : Y