const { Router } = require("express");
const router = Router();

const { ensureToken, verifyToken } = require("../middlewares/jwt");

const {
	getAbout,
	createAbout,
	updateAbout,
	deleteAbout,
} = require("../controllers/about.controller");

router
	.route("/")
	.get(getAbout)
	.post(ensureToken, verifyToken, createAbout);

router
	.route("/:id")
	.put(ensureToken, verifyToken, updateAbout)
	.delete(ensureToken, verifyToken, deleteAbout);

module.exports = router;
