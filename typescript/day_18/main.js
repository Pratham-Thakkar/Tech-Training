var Department = /** @class */ (function () {
    function Department(name) {
        this.employees = [];
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log('Department is: ' + this.name);
    };
    return Department;
}());
var account = new Department('Accounts');
account.describe();
var accountCopy = { describe: account.describe };
console.log(accountCopy.describe()); //undefined
//short hand
var Department2 = /** @class */ (function () {
    function Department2(name) {
        this.name = name;
        this.name = name;
    }
    Department2.prototype.describe = function () {
        console.log('Department is: ' + this.name);
    };
    return Department2;
}());
var account2 = new Department2('IT');
account2.describe();
