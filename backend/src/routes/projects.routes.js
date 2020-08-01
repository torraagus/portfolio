const { Router } = require("express");
const router = Router();

const { ensureToken, verifyToken } = require("../middlewares/jwt");

const {
	getProjects,
	createProject,
	getProject,
	updateProject,
	deleteProject,
} = require("../controllers/projects.controller");

router
	.route("/")
	.get(getProjects)
	.post(ensureToken, verifyToken, createProject);

router
	.route("/:id")
	.get(getProject)
	.put(ensureToken, verifyToken, updateProject)
	.delete(ensureToken, verifyToken, deleteProject);

module.exports = router;
