const { Router } = require("express");
const router = Router();

const { ensureToken, verifyToken } = require("../middlewares/jwt");

const {
  getUsers,
  // createUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

router.route("/").get(getUsers);

router
	.route("/:id")
	.get(getUser)
	.put(ensureToken, verifyToken, updateUser)
	.delete(ensureToken, verifyToken, deleteUser);

module.exports = router;
