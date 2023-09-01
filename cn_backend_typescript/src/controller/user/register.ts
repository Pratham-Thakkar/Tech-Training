import { Request, Response } from "express";
import { HydratedDocument } from "mongoose";
import { hash } from "bcrypt";
import User from "../../model/user";
import { IUser, userType as usertypeEnum } from "../../interface/user";
import { sendWelcomeEmail } from "../../utils/emailer";
import { uuid } from "uuidv4";

export const addUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      body: {
        firstName,
        lastName,
        email,
        countryCode,
        mobileNumber,
        password,
        castingMarket,
        userType,
        allowNotifications,
      },
    } = req;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !mobileNumber ||
      !password ||
      !userType
    )
      throw Error("Enter all the required fields");
    const user: HydratedDocument<IUser> = new User({
      userId: uuid(),
      firstName: firstName as string,
      lastName: lastName as string,
      email: email as string,
      countryCode: countryCode as string,
      mobileNumber: mobileNumber as string,
      password: password as string,
      userType: userType as string,
      castingMarket: castingMarket as string,
      allowNotifications: allowNotifications as boolean,
    });
    user.password = await hash(
      user.password,
      parseInt(process.env.HASH_ROUND!)
    );
    if (user.userType === usertypeEnum.cd) user.forcedPasswordReset = true;
    if (user.userType === usertypeEnum.admin) user.verified = true;
    await user.save();
    const sendMail = await sendWelcomeEmail(user.email, user.firstName);
    if (!sendMail) throw Error("Unable to send welcome email");
    return res.send({ status: "success", message: "user added", data: user });
  } catch (err) {
    if (err instanceof Error)
      return res.status(500).send({ status: "failed", message: err.message });
    return res.status(500).send({ status: "failed", message: err });
  }
};
