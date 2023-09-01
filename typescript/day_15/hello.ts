// console.log('Hello Type script');

// const combine = (num1: number, num2: number)=>{
//     return num1+num2
// }

// const arr1 : Array<string|number> = ['1', 1]

// export {}

//Primitive data types

//1. number
let age : number = 90; //Annotation
let primeNumber = 93 //inference
console.log("age:",age)
console.log("prime number", primeNumber);

//2. string
let name : string = 'Pratham'
console.log("name",name);

//3. boolean
let isActive : boolean = false
console.log(isActive);


//Non primitive datatype

//1. Array
let evenNos : number[] = [2,4,6,8]
let oddNos : Array<string|number> = ['pratham', 20]
console.log("even number", evenNos);
console.log("odd number", oddNos);

//Custom datatype
//1. type
type User={
    name:string;
    age:number;
    isAdult : Function
}
const user={
    name: 'Pratham',
    age:21,
    isAdult:function():boolean{
        if(this.age>18) return true
        return false
    },
    isAdult2:():boolean=>{
         if(this.age>18) return true //task call bind and apply
        return false
    }
}
console.log(user.isAdult());

//2.interface
interface Person{
    name:string;
}
interface Person2 extends Person{
    age:number
}

const person:Person={
    name:'Pratham',
    // age: 67 Error
}

const person2:Person2 = {
    name:'Pratham',
    age:20
}
console.log(person.name);
console.log(person2.name);
console.log(person2.age);

//3. functions
function bmi(gender: 'male' | 'female', weight:number, height:number):string{
    const result:number = weight/height
    return (result+gender)
}
// console.log(bmi(9,'a')); error
// console.log(bmi(89,177)); error
// console.log(bmi('Male',67, 78)); error
console.log(bmi('male', 89, 178));

//4. enum
enum userResponse{
    Yes= 1,
    No=0,
}
function response(userName: string, message:userResponse):void{
    console.log(`${userName} responded with ${message}`);    
}
// response('pratham', yes)//error
response('pratham', userResponse.No)



export{}

