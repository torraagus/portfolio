const { Schema, model } = require("mongoose");

const aboutSchema = new Schema({
	subtitle: String,
	description: String,
});

module.exports = model("About", aboutSchema);
