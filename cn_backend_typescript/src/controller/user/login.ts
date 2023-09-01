import { compare } from "bcrypt";
import { HydratedDocument } from "mongoose";
import jwt from "jsonwebtoken";
import { IUser } from "../../interface/user";
import User from "../../model/user";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const {
      body: { email, password },
    } = req;
    if (!email || !password) throw Error("Required fields are empty");
    if (typeof email !== "string" || typeof password !== "string")
      throw Error("Email and password has to be string");
    const user: HydratedDocument<IUser> | null = await User.findOne({
      email: email,
    });
    if (!user) throw Error("User doesnot exist");
    if (user.forcedPasswordReset) {
      return res.status(302).send({
        status: "failed",
        message: "CD need to update their password on first login",
      });
    }
    if (!user.verified) throw Error("Your account is not verified yet");
    const result: Promise<boolean> = compare(password, user.password!);
    if (!result) throw Error("Either username or password is incorrect");
    const token: string = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: {
          userId: user.userId,
          userType: user.userType,
          verify: user.verified,
          status: user.status,
        },
      },
      process.env.SECRET_KEY!
    );
    await user.updateOne({ lastLogin: Date.now() });
    return res.send({
      status: "sucess",
      message: "Logged In Sucessfully",
      token,
    });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(500).send({ status: "failed", message: err.message });
    }
    return res.status(500).send({ status: "failed", message: err });
  }
};
