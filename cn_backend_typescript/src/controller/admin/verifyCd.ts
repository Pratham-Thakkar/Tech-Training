import bcrypt from "bcrypt";
import { Request, Response } from "express";
import User from "../../model/user";
import { HydratedDocument } from "mongoose";
import generator from "generate-password";
import { IUser } from "../../interface/user";
import { sendVerificationEmail } from "../../utils/emailer";

export const verifyCd = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      params: { userId },
    } = req;
    if (!userId) throw Error("User Id is required");
    const user: HydratedDocument<IUser> | null = await User.findOne({
      userId,
    });
    if (!user) throw Error("No user found");
    if (user.verified) throw Error("User is already verified");
    const password: string = generator.generate({
      length: 6,
      numbers: true,
      uppercase: false,
      lowercase: false,
    });
    await user.updateOne({
      password: await bcrypt.hash(password, parseInt(process.env.HASH_ROUND!)),
      verified: true,
    });
    const result: boolean = await sendVerificationEmail(
      user.email,
      user.firstName,
      password
    );
    if (!result) throw Error("Unable to send email");
    return res.send({ status: "success", message: "Cd verified" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).send({ status: "failed", message: err.message });
    }
    return res.status(500).send({ status: "failed", message: err });
  }
};
