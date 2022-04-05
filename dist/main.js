function hello(compiler) {
    console.log("Hello from " + compiler);
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
var value = 10;
var value2 = 100;
console.log(value, value2);
// (2)针对对像,数组，函数
var data = {
    value: 123,
    text: 'text',
    subData: {
        value: false
    }
};
var fun = function (name, age) {
    return '随便';
};
var arr = [1, 2, '333', true];
var data1 = {
    value: 333,
    text: 'text',
    subData: {
        value: true
    }
};
var fun1 = function (name, age) {
    console.log('lalall');
    return 'lalal';
};
var arr1 = [false];
var person = 'age';
// keyof 在我们限制类型或者枚举属性时还是非常常见的，比如下面这个小例子：
function getProperty(obj, key) {
    return obj[key];
}
var obj = {
    value: 333,
    text: 'math',
    subData: {
        value: true
    }
};
console.log(getProperty(obj, 'text'));
