"use strict";
// console.log('Hello Type script');
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// const combine = (num1: number, num2: number)=>{
//     return num1+num2
// }
// const arr1 : Array<string|number> = ['1', 1]
// export {}
//Primitive data types
//1. number
var age = 90; //Annotation
var primeNumber = 93; //inference
console.log("age:", age);
console.log("prime number", primeNumber);
//2. string
var name = 'Pratham';
console.log("name", name);
//3. boolean
var isActive = false;
console.log(isActive);
//Non primitive datatype
//1. Array
var evenNos = [2, 4, 6, 8];
var oddNos = ['pratham', 20];
console.log("even number", evenNos);
console.log("odd number", oddNos);
var user = {
    name: 'Pratham',
    age: 21,
    isAdult: function () {
        if (this.age > 18)
            return true;
        return false;
    },
    isAdult2: function () {
        //  if(this.age>18) return true //task call bind and apply
        console.log(_this);
    }
};
console.log(user.isAdult2());
var person = {
    name: 'Pratham',
    // age: 67 Error
};
var person2 = {
    name: 'Pratham',
    age: 20
};
console.log(person.name);
console.log(person2.name);
console.log(person2.age);
//3. functions
function bmi(gender, weight, height) {
    var result = weight / height;
    return (result + gender);
}
// console.log(bmi(9,'a')); error
// console.log(bmi(89,177)); error
// console.log(bmi('Male',67, 78)); error
console.log(bmi('male', 89, 178));
//4. enum
var userResponse;
(function (userResponse) {
    userResponse[userResponse["Yes"] = 1] = "Yes";
    userResponse[userResponse["No"] = 0] = "No";
})(userResponse || (userResponse = {}));
function response(userName, message) {
    console.log("".concat(userName, " responded with ").concat(message));
}
// response('pratham', yes)//error
response('pratham', userResponse.No);
