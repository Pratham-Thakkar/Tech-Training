abstract class Talent {
  constructor(
    protected userId: string,
    protected userName: string,
    protected userEmail: string,
    private password: string
  ) {
    (this.userId! = userId),
      (this.userName! = userName),
      (this.userEmail! = userEmail);
    this.password! = password;
  }
  abstract getDetails(): void;

  get getPassword(): string {
    return this.password;
  }

  set setPassword(newPassword: string) {
    if (newPassword !== "") {
      this.password = newPassword;
    }
  }
}

interface TalentSubscription {
  renew(): void;
  terminate(): void;
}

class PremiumTalent extends Talent implements TalentSubscription {
  constructor(
    userId: string,
    userName: string,
    userEmail: string,
    password: string
  ) {
    super(userId, userName, userEmail, password);
  }

  getDetails(): void {
    console.log(`User Id : ${this.userId}`);
    console.log(`User name : ${this.userName}`);
    console.log(`User email : ${this.userEmail}`);
    // console.log(`User password: ${this.password}`);
  }

  renew(): void {
    console.log(`${this.userName}'s subscription renewed`);
  }

  terminate(): void {
    console.log(`${this.userName}'s subscription terminated`);
  }
}

const premiumTalent = new PremiumTalent(
  "123",
  "pratham",
  "email@gmail.com",
  "password"
);
premiumTalent.getDetails();
premiumTalent.renew();
premiumTalent.terminate();
console.log(premiumTalent.getPassword);
premiumTalent.setPassword = "new password";
console.log(premiumTalent.getPassword);
