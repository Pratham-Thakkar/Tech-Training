"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function getResponseTime(target, propertyName, descriptor) {
    console.log("Target: ", target);
    console.log("Property Name: " + propertyName);
    console.log("Descriptor: ", descriptor);
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            console.time(propertyName);
            const data = yield originalMethod.call(this, args);
            console.timeEnd(propertyName);
            return data;
        });
    };
    return descriptor;
}
function isString(target, propertyName) {
    console.log("target" + target);
    console.log("property name " + propertyName);
    let value;
    const get = () => value;
    const set = (newValue) => {
        if (typeof newValue !== "string" || newValue === "") {
            throw new Error("Invalid name");
        }
        else {
            value = newValue;
        }
    };
    Object.defineProperty(target, propertyName, {
        get,
        set,
    });
}
function isEmail(target, propertyName) {
    let value;
    const get = () => value;
    const set = (newValue) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newValue)) {
            value = newValue;
        }
        else {
            throw new Error("Invalid email");
        }
    };
    Object.defineProperty(target, propertyName, {
        get,
        set,
    });
}
var userType;
(function (userType) {
    userType[userType["Talent"] = 0] = "Talent";
    userType[userType["Director"] = 1] = "Director";
    userType[userType["Admin"] = 2] = "Admin";
})(userType || (userType = {}));
function authorize(...userTypes) {
    return function (target, propertyName, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            if (userTypes.includes(UserDetails.getUserType)) {
                originalMethod.call(this, args);
            }
            else {
                throw new Error("Unauthorized");
            }
        };
        return descriptor;
    };
}
function sessionExpired() {
    return function (target, propertyName, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function () {
            if (jsonwebtoken_1.default.verify(this.getToken(), "1234")) {
                originalMethod.call(this);
            }
            else {
                throw new Error("Login Again");
            }
        };
    };
}
class UserDetails {
    static get getUserType() {
        return UserDetails.userType;
    }
    static set setuserType(userType) {
        UserDetails.userType = userType;
    }
}
UserDetails.userType = userType.Talent;
class App {
    constructor(appName, email) {
        this.appName = appName;
        this.email = email;
        this.token = jsonwebtoken_1.default.sign({
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: {
                name: this.appName,
                email: this.email,
                userType: UserDetails.getUserType,
            },
        }, "1234");
    }
    addRole() {
        console.log("You can add role");
    }
    //   @getResponseTime
    fetchTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield fetch("https://jsonplaceholder.typicode.com/todos");
            const data = yield result.json();
            return data;
        });
    }
    getToken() {
        return this.token;
    }
    viewProjects() {
        console.log("You can view this project");
    }
}
__decorate([
    authorize(userType.Admin, userType.Director) //decorator factory
], App.prototype, "addRole", null);
__decorate([
    sessionExpired()
], App.prototype, "viewProjects", null);
const app = new App("jujutsu-kaisen", "pratham@ts.com");
app
    .fetchTodos()
    .then((res) => {
    console.log(res);
})
    .catch((err) => {
    console.log(err);
});
app.addRole();
app.viewProjects();
console.log(app.appName);
console.log(app.email);
