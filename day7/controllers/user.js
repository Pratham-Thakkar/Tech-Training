const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { sendResetPasswordMail, sendWelcomeMail } = require("../utils/emailer");

exports.addUser = async (req, res) => {
  try {
    const {
      body: { email, password, displayName },
    } = req;
    if (!email || !password || !displayName)
      throw Error("email, password, displayName is required");
    const user = new User({ email, password, displayName });
    await user.save();
    const result = await sendWelcomeMail(email, displayName);
    if (!result) throw Error("Unable to send email");
    res.send({
      status: "success",
      message: "User Added and welcome mail sent",
    });
  } catch (e) {
    res.status(503).send({ status: "failed", message: e.message });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const {
      body: { email },
    } = req;
    if (!email) throw Error("Email is necessary");
    const user = await User.findOne({ email });
    const token = await jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: { email },
      },
      process.env.SECRET_KEY
    );
    const link = req.protocol + "://" + req.get("host/") + token;
    const result = await sendResetPasswordMail(email, user.displayName, link);
    if (!result) throw Error("Unable to send email");
    res.send({ message: "email sent" });
  } catch (e) {
    res.status(503).send({ status: "failed", message: e.message });
  }
};
