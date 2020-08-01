const projectsCtrl = {};
const Project = require("../models/Project");

const code = {
  DUPLICATED_VALUE: "11000",
};

projectsCtrl.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

projectsCtrl.createProject = async (req, res) => {
  const project = new Project(req.body);
  await project.save((err) => {
    if (err) {
      const message =
        err.code == code.DUPLICATED_VALUE
          ? `The projectname ${err.keyValue.projectname} is already in use`
          : `${err}`;
      res.json({ message: message });
      return console.log(message);
    }
    res.json({ message: "Project saved" });
  });
};

projectsCtrl.getProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.json({ message: "Project not found" });
    return console.log("Project not found");
  }
  res.json(project);
  return console.log(project);
};

projectsCtrl.updateProject = async (req, res) => {
  await Project.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { runValidators: true },
    (err, doc) => {
      if (err) {
        res.json({ message: `${err}` });
        return console.log(`${err}`);
      }
      res.json({ message: "Project updated" });
    }
  ).catch(() => {}); //Here i catch the promise. Async functions always return a promise.
};

projectsCtrl.deleteProject = async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project) {
    res.json({ message: "Project not found" });
    return console.log("Project not found");
  }
  res.json({ message: "Project deleted" });
};

module.exports = projectsCtrl;
