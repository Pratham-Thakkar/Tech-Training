//number with *
const number = '9104602570'
const last2Digit= number.slice(-2)
const first2Digit = number.slice(0,2)

console.log(first2Digit.padEnd(8,'*')+last2Digit)

//convert to camel case
const ld= require('lodash')
const str2 = "Pratham Thakkar"
console.log(ld.camelCase(str2))


//how to remove in between extra space

//METHOD 1 using split
const name = "Pratham     Thakkar"
const names = name.split(' ').filter((element)=>{
    return (element!== "")
})
const fullName = `${names[0]} ${names[1]}`
console.log(fullName);

//REGEX [diff example]
//Written Capital Letters
const string = "       How    Are   You   Doing    Today? \n Pratham Here.\n Have     a Nice  DAy.     "
const regex = /[A-Z]/g
console.log(string.match(regex));

console.log(string);

//to remove extra spaces
console.log(string .replace(/[\n\r\s\t]+/g, ' '));