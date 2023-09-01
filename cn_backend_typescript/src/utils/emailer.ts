import sgMail from "@sendgrid/mail";
import { FROM_EMAIL, TEMPLATE_IDS } from "../config/sendGridConfig";

sgMail.setApiKey(process.env.SG_API!);

export const sendWelcomeEmail = async (
  email: string,
  userName: string
): Promise<boolean> => {
  try {
    const msg = {
      from: FROM_EMAIL,
      to: email,
      subject: "Welcome to Casting Network",
      html: `<strong>Hello ${userName}</strong>, Welcome to casting network`,
    };
    await sgMail.send(msg);
    return true;
  } catch (err) {
    return false;
  }
};

export const sendVerificationEmail = async (
  email: string,
  userName: string,
  password: string
): Promise<boolean> => {
  try {
    const msg = {
      from: FROM_EMAIL,
      to: email,
      subject: "Account Verified",
      html: `<h1>Hello ${userName}, Congratulations!! your account is verfied. Your password is ${password}, change your password on first login`,
    };
    await sgMail.send(msg);
    return true;
  } catch (err) {
    return false;
  }
};
