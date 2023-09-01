const router = require("express").Router();
const projectController = require("../controllers/project");

router.post("/addProject", projectController.addProjects);
router.get("/listProject", projectController.listProjects);

module.exports = router;
