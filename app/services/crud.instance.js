//const { sequelize } = require('../model/labmembers.model');
//const labMembers = require('../model/labmembers.model');
const labMember = require('../../models/labmembers');

const CrudInstance = {
  async destroyAll(req, res) {
    await labMembers.destroy({
      where: {},
      truncate: true,
    });
    res.redirect('/');
  },

  async addUser(req, res) {
    const trans = await sequelize.transaction();
    try {
      const toto = await labMembers.create(
        {
          firstname: 'seb',
          lastname: 'sebastien',
          email: 'seb@gmail.com',
        },
        { transaction: trans }
      );
      /* const pierre = await labMembers.create(
        {
          firstname: 'Pierre',
          lastname: 'Mr Pierre',
          email: 'pierre@gmail.com',
          role: 'Member',
        },
        { transaction: trans }
      );
      // autre façon de créé un objet avec build et save, create utilise save automatiquement
      const paul = labMembers.build(
        {
          firstname: 'Paul',
          lastname: 'Paul',
          email: 'paul@gmail.com',
          role: 'Member',
        },
        { transaction: trans }
      );
      await paul.save();

      const cunegonde = await labMembers.create(
        {
          firstname: 'Cunegonde',
          lastname: 'Cunegonde',
          email: 'cunegonde@gmail.com',
          role: 'Member',
        },
        { transaction: trans }
      );*/
      await trans.commit();
    } catch (err) {
      console.log(`Cant create new member: ${err}`);
      await trans.rollback();
    }
    res.redirect('/');
  },

  async findAllUser(req, res) {
    labMembers
      .findAll()
      .then((storedLabMembers) => {
        console.log(storedLabMembers);
        res.send(storedLabMembers);
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
        res.sendStatus(401);
      });
  },

  async updateUser(req, res) {
    const userLab = await labMembers.findOne({
      where: { firstname: 'Paul' },
    });
    if (userLab === null) {
      console.log('Not found!');
    } else {
      userLab.lastname = 'Pierre update';
      console.log(userLab instanceof labMembers);
      console.log(userLab.firstname);
      await userLab.save();
    }
    res.redirect('/');
  },

  async deleteUser(req, res) {
    // const userLab = await this.findOneUser('Pierre');
    const userLab = await labMembers.findOne({
      where: { firstname: 'Cunegonde' },
    });
    if (userLab === null) {
      console.log('Not found!');
    } else {
      console.log(userLab instanceof labMembers);
      console.log(userLab.firstname);
      await userLab.destroy();
    }
    res.redirect('/');
  },
};

module.exports = CrudInstance;
