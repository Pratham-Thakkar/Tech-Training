const Project = require("../models/project");
const utils = require("../utils/randomSkills");
const randomText = require("random-title");
const User = require("../models/user");

exports.addProjects = async (req, res) => {
  try {
    const users = await User.find({}, { _id: 1 });
    const allProjects = [];
    for (let i = 0; i < 100; i++) {
      const newProject = new Project({
        createdBy: users[Math.floor(Math.random() * users.length)].id, 
        title: randomText({ words: 3 }),
        description: randomText({ words: 8 }),
        published: Math.ceil(Math.random() * 100) % 3 === 0,
        skillsRequire: utils.randomSkills(skills),
      });
      allProjects.push(newProject);
    }
    await Project.insertMany(allProjects);
    res.send({ status: "success", message: "project added" });
  } catch (e) {
    res.status(503).send({ status: "failed", message: e.message });
  }
};

exports.listProjects = async (req, res) => {
  try {
    const {
      body: { offset, limit, skills },
    } = req;
    const projectList = await Project.find(
      {
        skillsRequire: { $all: skills.split(",") },
      },
      { title: 1 }
    )
      .sort({ title: 1 })
      .populate("createdBy", "displayName")
      .skip(offset)
      .limit(limit || 10);

    res.send({
      status: "success",
      count: await Project.countDocuments({
        skillsRequire: { $all: skills.split(",") },
      }),
      list: projectList,
    });
  } catch (e) {
    res.status(503).send({ status: "failed", message: e.message });
  }
};
