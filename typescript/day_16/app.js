//Difference between normal function and arrow function

//1. Function Invocation

console.log(add(5, 6)); //hoisting

function add(a, b) {
  return a + b;
}

// console.log(addition(3, 4)); error
const addition = function (a, b) {
  //anonymous function
  return a + b;
};

// console.log(sum(8, 9)); //error
const sum = (a, b) => {
  return a + b;
};
console.log(sum(8, 9));

//2.Argument objects

//argument is an array-like object
function add2() {
  console.log(arguments[0]);
}
add2(1, 2, 3, 4);

//arrow function don't have any arguments
const sum2 = (...value) => console.log(value);
sum2(1, 2);

//3. invokation with new keyword
//constructor function
function add3(a) {
  this.a = a;
}
const res = new add3(9);
console.log(res.a);

const sum3 = () => {
  this.c = 90;
};
// const res2 = new sum3(); //error
// console.log(res2);

//4. this
const user = {
  name: "pratham",
  getUserName() {
    console.log(this.name);
  },
};
user.getUserName();

//but in arrow function this keyword points to a window object
const user2 = {
  name: "pratham",
  getUserName: () => console.log(this),
};
user2.getUserName();

//bind, call & apply

//1. bind
let pokemon = {
  firstName: "Pika",
  lastName: "Chu",
  getPokemonName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

let pokemonName = function (hobby1, hobby2) {
  console.log(
    `${this.getPokemonName()} is my name. My hobbies are ${hobby1} & ${hobby2}`
  );
};

let consolePokemonName = pokemonName.bind(pokemon);
// console.log(consolePokemonName); //makes copy og pokemonName and binds it with object pokemon
consolePokemonName("dancing", "swimming");

//2. call & apply

//call() expects all parameters to be passed in individually, whereas apply() expects an array of all of our parameters.
//they don't create a copy of function instead call them right away

pokemonName.call(pokemon, "dancing", "swimming");
pokemonName.apply(pokemon, ["acting", "sleeping"]);
