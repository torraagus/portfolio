const { Schema, model } = require("mongoose");

const projectSchema = new Schema({
	name: String,
	subtitle: String,
	description: String,
	backend: [String],
	frontend: [String],
	srcImage: String,
	githubLink: String,
	liveLink: String,
});

module.exports = model("Project", projectSchema);
