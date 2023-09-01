class Department {
    name: string
    employees : string[] =[]
    constructor(public id: string, name : string){
        this.name = name
    }
    describe(){
        console.log('Department is: '+this.name);
    }
}

const account = new Department('1','Accounts')
account.describe()

const accountCopy = {describe: account.describe}
console.log(accountCopy.describe()); //undefined

//short hand
class Department2 {
    constructor(private readonly name : string, ){
        this. name = name
    }
    describe(this: Department2){
        console.log('Department is: '+this.name);
    }
}
const account2 = new Department2('IT')
account2.describe()

//inheritance
class ItDepartment extends Department{
    
    constructor(public id:string, public admins : string[]){
        super(id, 'IT')
    }
}

//getter and setter
//static
//how to use static methods

//Abstract Classes
abstract class DepartmentA{
    abstract describe(this: Department):void
}

//singleton classes use case
//interface & classes
//interface don't exist in JavaScript
//class A implements interfaceA

