const aboutCtrl = {};
const About = require("../models/About");

aboutCtrl.getAbout = async (req, res) => {
	const about = await About.find();
	res.json(about[0]);
};

aboutCtrl.createAbout = async (req, res) => {
	const about = new About(req.body);
	await about.save((err) => {
		if (err) {
			res.json({ message: `${err}` });
			return console.log(`${err}`);
		}
		res.json({ message: "About saved" });
	});
};

aboutCtrl.updateAbout = async (req, res) => {
  await About.findOneAndUpdate({}, req.body, { runValidators: true }, (err, doc) => {
    if (err) {
      res.json({ message: `${err}` });
			return console.log(`${err}`);
		}
		res.json({ message: "About updated" });
	}).catch(() => {});
};

aboutCtrl.deleteAbout = async (req, res) => {
	// const project = await About.find.findByIdAndDelete(req.params.id);
	const about = await About.find({})[0];
	if (!about) {
		res.json({ message: "About not found" });
		return console.log("About not found");
	}
	res.json({ message: "About deleted" });
};

module.exports = aboutCtrl;
