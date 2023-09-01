//identity function
function identity(args: any) {
  return args;
}

//generic
const test: string[] = [];
const test2: Array<string> = new Array();

//generic function
function identity2<Type>(args: Type): Type {
  return args;
}

let ans = identity2<string>("1");
//Type acts as a variable which store a type

function identity3<Type>(args: Type[]): Type[] {
  console.log(args.length);
  return args;
}
let ans2 = identity3<string>(["hello world"]);

//promises
//state -> success failed inprogress
const promise: Promise<string> = new Promise((resolve, reject) => {
  try {
  } catch (e) {}
});

promise.then((data) => {
  data.split(" ");
});

//constraints
function merge<T extends {}, U extends {}>(objA: T, objB: U): <T,U> {
  return Object.assign(objA, objB);
}

const mergedObject = merge({ name: "p" }, { age: 20 });
mergedObject.name;

//
function getValue<T extends object, U extends keyof T>(obj: T, key:U){
    return obj[key]
}
const emp={
    name:'Pratham'
}

getValue(emp,'name')

//generics for classes
const arr =[{a:1, b:2}]
console.log(arr.indexOf({a:1, b:2}));

//Readonly for generics types

//partial for interface
//Partial<Interface>
//how to achieve object type