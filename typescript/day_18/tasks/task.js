var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Talent = /** @class */ (function () {
    function Talent(userId, userName, userEmail, password) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.password = password;
        (this.userId = userId),
            (this.userName = userName),
            (this.userEmail = userEmail);
        this.password = password;
    }
    Object.defineProperty(Talent.prototype, "getPassword", {
        get: function () {
            return this.password;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Talent.prototype, "setPassword", {
        set: function (newPassword) {
            if (newPassword !== "") {
                this.password = newPassword;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Talent;
}());
var PremiumTalent = /** @class */ (function (_super) {
    __extends(PremiumTalent, _super);
    function PremiumTalent(userId, userName, userEmail, password) {
        return _super.call(this, userId, userName, userEmail, password) || this;
    }
    PremiumTalent.prototype.getDetails = function () {
        console.log("User Id : ".concat(this.userId));
        console.log("User name : ".concat(this.userName));
        console.log("User email : ".concat(this.userEmail));
        // console.log(`User password: ${this.password}`);
    };
    PremiumTalent.prototype.renew = function () {
        console.log("".concat(this.userName, "'s subscription renewed"));
    };
    PremiumTalent.prototype.terminate = function () {
        console.log("".concat(this.userName, "'s subscription terminated"));
    };
    return PremiumTalent;
}(Talent));
var premiumTalent = new PremiumTalent("123", "pratham", "email@gmail.com", "password");
premiumTalent.getDetails();
premiumTalent.renew();
premiumTalent.terminate();
console.log(premiumTalent.getPassword);
premiumTalent.setPassword = "new password";
console.log(premiumTalent.getPassword);
