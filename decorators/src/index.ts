import jwt from "jsonwebtoken";

function getResponseTime(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  console.log("Target: ", target);
  console.log("Property Name: " + propertyName);
  console.log("Descriptor: ", descriptor);

  const originalMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    console.time(propertyName);
    const data = await originalMethod.call(this, args);
    console.timeEnd(propertyName);
    return data;
  };
  return descriptor;
}

function isString(target: any, propertyName: string) {
  console.log("target" + target);
  console.log("property name " + propertyName);

  let value: string;

  const get = () => value;
  const set = (newValue: string) => {
    if (typeof newValue !== "string" || newValue === "") {
      throw new Error("Invalid name");
    } else {
      value = newValue;
    }
  };

  Object.defineProperty(target, propertyName, {
    get,
    set,
  });
}

function isEmail(target: any, propertyName: string) {
  let value: string;

  const get = () => value;

  const set = (newValue: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(newValue)) {
      value = newValue;
    } else {
      throw new Error("Invalid email");
    }
  };

  Object.defineProperty(target, propertyName, {
    get,
    set,
  });
}

enum userType {
  Talent,
  Director,
  Admin,
}

function authorize(...userTypes: userType[]) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (userTypes.includes(UserDetails.getUserType)) {
        originalMethod.call(this, args);
      } else {
        throw new Error("Unauthorized");
      }
    };
    return descriptor;
  };
}

function sessionExpired() {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: App) {
      if (jwt.verify(this.getToken(), "1234")) {
        originalMethod.call(this);
      } else {
        throw new Error("Login Again");
      }
    };
  };
}

class UserDetails {
  private static userType: userType = userType.Talent;

  static get getUserType() {
    return UserDetails.userType;
  }

  static set setuserType(userType: userType) {
    UserDetails.userType = userType;
  }
}

class App {
  //   @isString
  appName: string;

  //   @isEmail
  email: string;

  private token: string;

  constructor(appName: string, email: string) {
    this.appName = appName;
    this.email = email;
    this.token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: {
          name: this.appName,
          email: this.email,
          userType: UserDetails.getUserType,
        },
      },
      "1234"
    );
  }

  @authorize(userType.Admin, userType.Director) //decorator factory
  addRole() {
    console.log("You can add role");
  }

  //   @getResponseTime
  async fetchTodos() {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await result.json();

    return data;
  }

  getToken() {
    return this.token;
  }

  @sessionExpired()
  viewProjects() {
    console.log("You can view this project");
  }
}

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
