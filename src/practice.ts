let aa = "ahsan";

const array = [2, 3, 4, "ahsan"];

function hello(name1: string) {}

type User = {
  name: string;
  age: 23;
  further: {
    name: string;
    section: string;
    rolNbr: number;
  };
};

interface Usre {
  name?: string;
}

// spread operator

function nameAndAges(age, { name: string }) {}
