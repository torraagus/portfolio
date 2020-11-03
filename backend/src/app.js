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
	const filename = lg === "es" ? "/cvs/cv_es.pdf" : "/cvs/cv_en.pdf";
	res.download(path.join(__dirname, "..") + filename, filename);
});
app.post("/send-email", (req, res) => {
	const nodemailer = require("nodemailer");
	const { google } = require("googleapis");
	const OAuth2 = google.auth.OAuth2;

	const clientId = "508404364282-eic7s9qaahbi7hbs8skpla9v7hjcii73.apps.googleusercontent.com";
	const clientSecret = "5iYOCqGifIO3v8MbJMEgt4v1";
	const oauth2Client = new OAuth2(
		clientId, // ClientID
		clientSecret, // Client Secret
		"https://developers.google.com/oauthplayground" // Redirect URL
	);

	const refresh_token =
		"1//049xPmkIdNA41CgYIARAAGAQSNwF-L9IrZOkLIXzywobVm7n7dApgLz8mnAXroBTTKTJNHhQRTSxu0Sv4LVA2G0mQ9I8PLskKFQo";
	oauth2Client.setCredentials({
		refresh_token,
	});
	const accessToken = oauth2Client.getAccessToken();

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			type: "OAuth2",
			user: "torraagustin@gmail.com",
			clientId,
			clientSecret,
			refreshToken: refresh_token,
			accessToken,
		},
		tls: {
			rejectUnauthorized: false,
		},
		// auth: {
		// 	user: process.env.EMAIL,
		// 	pass: process.env.PASSWORD,
		// },
	});

	const mailOptions = {
		from: "torraagustin@gmail.com",
		to: "torraagustin@gmail.com",
		subject: `${req.body.subject} (${req.body.from})`,
		text: req.body.message,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		error ? res.send(error) : res.send(info.response);
	});
});

module.exports = app;
