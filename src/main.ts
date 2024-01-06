// console.log("helloo ts");

// in type we can use any type but in interface we only can use object type we cannot assign a interface value as a number but in case of type we can do that that's why we prefer type......

type Person = {
  name: string;
  age: number;
  isPresent?: boolean;
};
interface Person1 {
  name: string;
  age: number;
  isPresent?: boolean;
}

let a = "ahsan";

let b = 21;

let arr = [1, 23, 4];
let arr1 = ["ahsan", "ali"];

let obj1: Person = {
  name: "ahsan",
  age: 21,
};

let obj: { name: string; age: number; isPresent?: boolean } = {
  name: "ahsan",
  age: 21,
};

// destructuring and rest parameters

// function sum(...nums: number[]) {
//   return;
// }
// sum(1, 2, 3);

// type Options = {
//   debugMode?: boolean;
//   indentLevel?: number;
// };

// function nameAndAge(
//   name: string,
//   { debugMode = true, indentLevel }: Options = {}
// ) {
//   console.log(name, debugMode, indentLevel);
// }
// nameAndAge("ahsan");

//  union

// let res: number | string = "pass";

// // intersection
// type Inter = {
//   name: string;
//   age: number;
// };

// type Result = {
//   ress: string;
// };

// let table: Inter = {
//   name: "ahsan",
//   age: 21,
// };

// let school: Inter & Result = {
//   name: "ahsan",
//   age: 21,
//   ress: "pass",
// };

//read-only

// type Obj2 = {
//   readonly id: number;
// };

// const obj33:Obj2 = {
//   id : 23
// }

// obj33.id = 44

// keyof

// type Js = {
//   name: string;
//   age: number;
// };

// const Jss: Js = {
//   name: "ahsan",
//   age: 21,
// };

// function hellojs(key: keyof Js, Jss: Js) {
//   console.log(Jss[key]);
// }

// Generics
//example 1

// const elm = document.querySelector<HTMLInputElement>(".input");
// console.log(elm?.value);

//example 2

// function getSecond<ArrayType>(arr: ArrayType[]) {
//   return arr[1];
// }

// const arrA = [2, 3, 54, 6];
// const arrB = ["a", "v", "f"];

// getSecond(arrA);
// getSecond(arrB);

//example 3

function aToO<T>(array: [string, T][]) {
  const obj: { [index: string]: T } = {};
  array.forEach(([key, value]) => {
    obj[key] = value;
  });
  return obj;
}

const arrd: [string, number | boolean][] = [
  ["keyOne", 1],
  ["keytwo", 2],
  ["keythree", true],
];

aToO(arrd);
