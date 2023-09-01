const User = require("../models/user");

exports.addUser = async (req, res) => {
  try {
    const {
      body: { displayName, email, password },
    } = req;
    console.log(email); // no need console log
    if (!displayName || !email || !password)
      throw Error("Password, email, displayname is not specified"); // give proper error message
    const result = await User.findOne({ email });
    if (result) throw Error("User already existed");
    console.log(result); // no need console log
    const user = new User({ email, password, displayName });
    await user.save();
    res.send({ status: "success", message: "user added" }); // return the result of user.save();
  } catch (e) {
    res.status(503).send({ status: "failed", message: e.message });
  }
};
