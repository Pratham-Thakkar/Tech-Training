const User = require("../models/user");

exports.addUser = async (req, res) => {
  try {
    const {
      body: { displayName, email, password },
    } = req;
    if (!displayName || !email || !password)
      throw Error("Password, email, displayname is not specified");
    const result = await User.findOne({ email });
    if (result) throw Error("User already existed");
    const user = new User({ email, password, displayName });
    await user.save();
    res.send({ status: "success", message: "user added" });
  } catch (e) {
    res.status(503).send({ status: "failed", message: e.message });
  }
};

exports.listUser = async (req, res) => {
  try {
    const result = await User.aggregate([
      {
        $lookup: {
          from: "projects",
          localField: "_id",
          foreignField: "createdBy",
          pipeline: [
            {
              $project: {
                _id: 0,
                title: 1,
                description: 1,
                published: 1,
              },
            },
          ],
          as: "projects",
        },
      },
      {
        $set: {
          totalProjects: {
            $size: "$projects",
          },
        },
      },
      {
        $project: {
          email: 1,
          displayName: 1,
          projects: 1,
          _id: 1,
          isSet: 1,
          totalProjects: 1,
        },
      },
      {
        $merge: {
          into: "myOutput",
          on: "_id",
          whenMatched: "replace",
          whenNotMatched: "insert",
        },
      },
    ]);
    res.send({ status: "success", data: result });
  } catch (e) {
    res.status(500).send({ status: "failed", message: e.message });
  }
};
