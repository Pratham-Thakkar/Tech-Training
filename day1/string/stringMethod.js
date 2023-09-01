const { log } = require("console");

let message = 'Hello World Good Morning!'

//Slice -> slices a particular part of a string
let result = message.slice(-8,-1) //treats only NaN as 0 condition is that indexStart should be small then indexEnd
console.log(result);

//Substring
let result2 = message.substring(6, 13) //treats neg number or NaN as 0
console.log(result2);
 
//charAt
let char = message.charAt(7)
console.log(char);

//charCodeAt
let char2 = message.charCodeAt(7)
console.log(char2);

//toUpperCase -> not change the original message
let allCaps = message.toUpperCase()
console.log(allCaps);
console.log(message);

//toLowerCase
let allSmall = message.toLowerCase()
console.log(allSmall);

//includes
console.log(message.includes('Good'));

//trim -> not change original string
let message2 = "     pratham       "
console.log(message2.trim());
console.log(message2.trimEnd());
console.log(message2.trimStart());
console.log(message2);

//split
let splittedString = message.split(' ')
console.log(splittedString);

