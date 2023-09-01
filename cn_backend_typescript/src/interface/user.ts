export enum userType {
  cd = "cd",
  talent = "talent",
  admin = "admin",
}

export enum status {
  active = "active",
  inactive = "inactive",
  blocked = "blocked",
}

export interface IUser {
  userId: string;
  firstName: string;
  lastName?: string;
  email: string;
  countryCode: string;
  mobileNumber: string;
  password: string;
  castingMarket: string;
  userType: userType;
  lastLogin?: Date;
  forcedPasswordReset: boolean;
  profilePicUrl?: string;
  verified: boolean;
  status: status;
  acceptTermsAndConditions: boolean;
  allowNotifications: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
