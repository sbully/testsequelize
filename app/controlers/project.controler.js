const ProjectService = require('../services/project/project.service');

const ProjectControler = {
  getAllProject: async (req, res) => {
    try {
      const projectList = await ProjectService.getAllProject();
      console.log(projectList);
      res.json(projectList);
    } catch (err) {
      res.status(401);
      res.send(`Cannot load Projects : ${err}`);
    }
  },
  getOneProject: async (req, res) => {
    if (parseInt(req.params.id))
      try {
        const project = await ProjectService.getProject(req.params.id);
        res.json(project);
      } catch (err) {
        res.status(401);
        res.send('Cannot load project');
      }
  },
  updateProject: async (req, res) => {},
};

module.exports = ProjectControler;
