const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const { ensureToken, verifyToken } = require("./middlewares/jwt");

// settings
app.set("port", process.env.PORT || 4000);

// middleware - Se ejecutan antes de llegar a las urls
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../..") + "/build"));

// routes
app.use(
	"/api/users",
	ensureToken,
	verifyToken,
	require("./routes/users.routes")
);
app.use("/api/projects", require("./routes/projects.routes"));
app.use("/api/login", require("./routes/login.routes"));
app.get("/download", (req, res) => {
	res.download(
		path.join(__dirname, "..") + "/cv_español.pdf",
		"cv_español.pdf"
	);
});

module.exports = app;
