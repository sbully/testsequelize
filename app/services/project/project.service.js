const { Project, LabMembers, Works, sequelize } = require('../../../models/');
const labmembers = require('../../../models/labmembers');

const ProjectService = {
  getAllProject: async () => {
    console.log('get all project');
    return await Project.findAll({
      attributes: ['id', 'name', 'description'],
      include: {
        model: LabMembers,
        attributes: ['id', 'firstname', 'lastname', 'email'],
        as: 'labMembers',
        through: {
          model: Works,
          as: 'work',
          attributes: ['role'],
        },
      },
    });
  },
  getProject: async (id) => {
    return await Project.findByPk(id);
  },
  addProject: async (project) => {
    if (project !== null) {
      const { name, description } = project;
      const trans = await sequelize.transaction();
      try {
        const newProject = await Project.create(
          {
            name: name,
            description: description,
          },
          { transaction: trans }
        );
        await trans.commit();
      } catch (err) {
        await trans.roolback();
        throw new Error(`Error when attend to create new Project :${err}`);
      }
    }
  },
  updateProject: async (project) => {},
  deleteProject: async (id) => {
    if (parseInt(id)) {
      const trans = await sequelize.transaction();
      try {
        await Project.destroy({ where: { id: id } }, { transaction: trans });
        await trans.commit();
      } catch (err) {
        trans.roolback();
        throw new Error(`Error when attend to delete Project : ${err}`);
      }
    }
  },
};

module.exports = ProjectService;
