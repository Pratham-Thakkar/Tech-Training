import { Request, Response } from "express";
import User from "../../model/user";
import bcrypt from "bcrypt";
import { HydratedDocument } from "mongoose";
import { IUser, userType } from "../../interface/user";

export const updatePassword = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      body: { email, oldPassword, newPassword, confirmPassword },
    } = req;
    const user: HydratedDocument<IUser> | null = await User.findOne({
      email: email as string,
    });
    if (!oldPassword || !newPassword || !confirmPassword)
      throw Error("required field is empty");
    if (!user) throw Error("User doesnot exist");
    if (user.userType === userType.cd && user.verified === false)
      throw Error("You are still not verified, please contanct support team");
    if (!(await bcrypt.compare(oldPassword, user.password)))
      throw Error("Your old password is incorrect");
    if (oldPassword === newPassword)
      throw Error("Your old and new password cant be same");
    if (newPassword !== confirmPassword)
      throw Error("Your new password and confirm password are different");
    user.password = await bcrypt.hash(
      newPassword,
      parseInt(process.env.HASH_ROUND!)
    );
    user.forcedPasswordReset = false;
    await user.save();
    return res.send({
      status: "sucess",
      message: "Password updated sucessfully",
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).send({ status: "failed", message: err.message });
    }
    return res.status(500).send({ status: "failed", message: err });
  }
};
