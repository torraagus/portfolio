const aboutCtrl = {};
const About = require("../models/About");

const code = {
  DUPLICATED_VALUE: "11000",
};

aboutCtrl.getAbout = async (req, res) => {
  const about = await About.find();
  res.json(about[0]);
};

aboutCtrl.createAbout = async (req, res) => {
  const about = new About(req.body);
  await about.save((err) => {
    if (err) {
      const message =
        err.code == code.DUPLICATED_VALUE
          ? `The projectname ${err.keyValue.projectname} is already in use`
          : `${err}`;
      res.json({ message: message });
      return console.log(message);
    }
    res.json({ message: "About saved" });
  });
};

aboutCtrl.updateAbout = async (req, res) => {
  await About.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true },
    (err, doc) => {
      if (err) {
        res.json({ message: `${err}` });
        return console.log(`${err}`);
      }
      res.json({ message: "About updated" });
    }
  ).catch(() => {}); //Here i catch the promise. Async functions always return a promise.
};

aboutCtrl.deleteAbout = async (req, res) => {
  const project = await About.findByIdAndDelete(req.params.id);
  if (!project) {
    res.json({ message: "About not found" });
    return console.log("About not found");
  }
  res.json({ message: "About deleted" });
};

module.exports = aboutCtrl;
