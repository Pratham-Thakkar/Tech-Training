console.log('Hello World');

//string literals
const username = 'Pratham'
console.log(`${username} logged in`)

// & -> multiple params in URL

//spread, rest[store in array] & Destructure

const arr1 = [1,2,3]
const arr2 = [7,8,9]

const arr3 = [...arr1,4,5,6,...arr2]
console.log(arr3);

//rest -> we don't know how many args will be passed
function sum(...numbers) {
  return numbers[0].reduce((sum, value) => {
    return sum + value;
  }, 0);
}

console.log(sum([1,2,3,4,9]));

//Destructuring
//we don't bother about ordering
const printAbout = ({name, age})=>{ 
    console.log(`My name is ${name} and My age is ${age}`);
}

const person1 = {
    name: 'Pratham',
    age: 20,
    address: {
        city: 'Ahmedabad',
        state: 'GUJ'
    }
}

printAbout(person1);

const {city} = person1 ?. address
console.log(city)

//destructuring in Array
const cars = ['ford', 'seltos', 'kia', 'maruti']
const[f,,kia,]= cars

console.log(kia+f);

