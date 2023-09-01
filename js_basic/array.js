const numbers = [1,2,3,4,5,6,7,8,9,10]

//filter
const oddNumbers = numbers.filter(num=>{
    return num%2 === 1
})
console.log(oddNumbers);

//every
const allLessThan10 = numbers.every(num=> num<=10)
console.log(allLessThan10);

//some
const isEvenPresent = numbers.some(num=> num%2===0)
console.log(isEvenPresent)

//reduce
const result = numbers.reduce((sum, currentValue)=>{
    return sum+currentValue
},0)
console.log(result);

//map
const lessthan1 = numbers.map(num=>num/10)
console.log(lessthan1);

//slice
const first5Numbers = numbers.slice(0,5)
console.log(first5Numbers);

//splice -> changes original array
const numbers2 = [1,2,3,4,5,6,7]
numbers2.splice(4,1,4.5, 4.6, 4.7)
console.log(numbers2);

//fill -> changes original array
numbers2.fill(0);
console.log(numbers2);

//forEach -> do not return anything
numbers2.forEach((num, i)=>{
    numbers2[i]=num+1
})
console.log(numbers2);

//TASK
const persons = [
    {
        name: 'Pratham',
        age: 20,
    },
    {
        name: 'Shibu',
        age: 20,
    },
    {
        name: 'Raj',
        age: 20,
    },

]

const arr2 = persons.map(person=>{
    return {...person, message: `Hello ${person.name}`}
})

// console.log(arr2)