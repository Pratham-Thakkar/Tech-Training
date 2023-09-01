import { Schema, model } from "mongoose";
import { IUser, userType, status } from "../interface/user";

const userSchema = new Schema<IUser>(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    countryCode: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    castingMarket: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      enum: userType,
      default: userType.talent,
    },
    lastLogin: Date,
    forcedPasswordReset: {
      type: Boolean,
      default: false,
    },
    profilePicUrl: String,
    verified: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: status,
      default: status.active,
    },
    acceptTermsAndConditions: {
      type: Boolean,
      default: true,
    },
    allowNotifications: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (): Promise<void> {
  this.email = this.email.toLowerCase();
});

export default model<IUser>("User", userSchema);
