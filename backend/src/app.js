const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

// const { ensureToken, verifyToken } = require("./middlewares/jwt");

// settings
app.set("port", process.env.PORT || 4000);

// middleware - Se ejecutan antes de llegar a las urls
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../..") + "/build"));

// routes
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/projects", require("./routes/projects.routes"));
app.use("/api/about", require("./routes/about.routes"));
app.use("/api/login", require("./routes/login.routes"));
app.get("/download", (req, res) => {
	const { lg } = req.query;
	const filename = lg === "es" ? "/cvs/cv_spanish.pdf" : "/cvs/cv_english.pdf";
	res.download(path.join(__dirname, "..") + filename, filename);
});
app.post("/send-email", (req, res) => {
	const nodemailer = require("nodemailer");

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	const mailOptions = {
		from: req.body.from,
		to: process.env.EMAIL,
		subject: `${req.body.subject} (${req.body.from})`,
		text: req.body.message,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		error ? res.send(error) : res.send(info.response);
	});
});

module.exports = app;
