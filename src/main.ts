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

function sum(...nums: number[]) {
  return;
}
sum(1, 2, 3);

type Options = {
  debugMode?: boolean;
  indentLevel?: number;
};

function nameAndAge(
  name: string,
  { debugMode = true, indentLevel }: Options = {}
) {
  console.log(name, debugMode, indentLevel);
}
nameAndAge("ahsan");
