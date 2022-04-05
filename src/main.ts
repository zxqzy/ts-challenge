function hello(compiler: string) {
  console.log(`Hello from ${compiler}`);
}
hello("TypeScript");

// let value: any

// unknown 类型只能分配给unkown 和 any 类型， 而any类型的值可以被分配给任意类型。
// let value1: unknown = value
// let value2: any = value
// let value3: number = value

// ts类型表达中常用的关键字，一般用于表达一些复杂类型。
// 1.extends
// 2.typeof

// (1) 针对基本类型：number, string, boolean
const value: number = 10
const value2: typeof value = 100
console.log(value, value2)

// (2)针对对像,数组，函数
const data = {
  value: 123,
  text: 'text',
  subData: {
    value: false
  }
}

const fun = function(name: string, age: number): string {
  return '随便'
}

const arr = [1, 2, '333', true]

type Data = typeof data
type Fun = typeof fun
type Arr = typeof arr

const data1: Data = {
  value: 333,
  text: 'text',
  subData: {
    value: true
  }
}
const fun1: Fun = function(name: string, age: number): string {
  console.log('lalall')
  return 'lalal'
}
const arr1:Arr = [false]

// 3.keyof
//keyof 是TS中的索引类型查询操作符。keyof T 会得到由 T 上已知的公共属性名组成的联合类型。

interface Person {
  name: string
  age: number
  phoneNum: number,
  hobby: {
    food: string,
    sports: Array<string>
  }
}

// 只会进行一级遍历，而不会进行深度遍历
type typePerson = keyof Person

const person: typePerson = 'age'

// keyof 在我们限制类型或者枚举属性时还是非常常见的，比如下面这个小例子：
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

// T[K] 在TS里称作索引访问操作符（indexed access operator）。它可以为我们准确解析目标对象上的对应属性的正确类型

const obj = {
  value: 333,
  text: 'math',
  subData: {
    value: true
  }
}
console.log(getProperty(obj, 'text'))

// 4.in
// 用于遍历目标类型的公开属性名
// in 可以用于联合类型或者枚举类型

// 枚举类型
enum Letter {
  A,
  B,
  C
}

type letterMap = {
  [key in Letter]: string
}

// 联合类型
type Property = 'name' | 'age' | 'phoneNum';

type PropertyObject = {
    [key in Property]: string;
}

const testT = {
  value: 333,
  text: 'math',
  subData: {
    value: true
  }
}

// 用于基础类型
type StringKey = {
  [key in string]: any
}

const testStringObj: StringKey = {
  aa: 11,
  b:2,
  1: {
    d: true
  }
}

type NumberKey =  {
  [key in number]: any;
}

const testNumberObj: NumberKey = {
  1: 'aaa',
  2: '333'
}


// 交叉类型
interface IPerson {
  id: string,
  age: number
}

interface IWorker {
  companyId: string
}

type IStaff = IPerson & IWorker

const staff: IStaff = {
  id: '99',
  age: 33,
  companyId: 'ff'
}

// 函数类型声明方式
let IdGenerator: (chars: string, nums: number) => string

function createUserId(name: string, id: number): string {
  return name + id
}
IdGenerator = createUserId

// 可选参数要放在普通参数的后面，不然会导致编译错误

// ReadonlyArray<T> 数组创建后数组不能够被改变。不能够通过索引改变，也不能通过push方法，也不能改变length,也不能重新赋值

// typescript 类中的访问器（方法前面加 get 和 set）

// ECMAScript 私有字段

// 范型： 允许同一个函数接受不同参数的一个模板。

// 装饰器： 类装饰器，属性装饰器， 方法装饰器， 参数装饰器
let textValue: unknown
(textValue as string).trim()

let test1: never
let test2: never = test1

const obj1 = {}
// obj1.aaa = 'c'

let num : 'zxq' | 'zxw' = 'zxq'  //字面量类型，用来约束值只能取其中一个


type Combinable = string | number;
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
  return a.toString() + b.toString();
   }
  return a + b;
  }

interface PartialPointX { x: number; }
type Point = PartialPointX & { y: number; };
let point: Point = {
  x: 34,
  y:33
}

console.log(point)

type Diff<T, U> = T extends U ? never : T;

type R = Diff<"a" | "b" | "c" | "d", "a" | "c" | "f">;

type Filter<T, U> = T extends U ? T : never;
type R1 = Filter<string | number | boolean, number>;

// type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any;
