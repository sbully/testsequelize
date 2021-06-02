const { LabMembers, sequelize } = require('../../../models/');
const PasswordService = require('../password/password.service');

const LabMembersService = {
  getAllLabMembers: async () => {
    return await LabMembers.findAll();
  },
  getOneMemberById: async (id) => {
    return await LabMembers.findByPk(id);
  },
  getLabMembersLogin: async (email) => {
    if (!email) return null;
    else {
      return await LabMembers.findOne({
        where: { email: email },
      });
    }
  },

  deleteOneLabMember: async (id) => {
    if (parseInt(id)) {
      const trans = await sequelize.transaction();
      try {
        await LabMembers.destroy({ where: { id: id } }, { transaction: trans });
        trans.commit();
      } catch (err) {
        trans.rollback();
        console.log(`Error when delete: ${err}`);
      }
    }
  },
  addLabMember: async (newLabMember) => {
    if (newLabMember !== null) {
      const { firstname, lastname, email, role } = newLabMember;
      /* let password; */
      console.log(newLabMember);
      const trans = await sequelize.transaction();
      const password = PasswordService.getHashPassword(newLabMember.password);

      console.log(password);
      try {
        const newlabMem = await LabMembers.create(
          {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            role: role,
          },
          { transaction: trans }
        );

        await trans.commit();
      } catch (e) {
        await trans.rollback();
        console.log(`Create Error : ${e}`);
        throw new Error('Error when create member');
      }
    }
  },
  //#region UPDATELABMEMBER
  updateLabMember: async (params) => {
    const { id, firstname } = params;
    const trans = await sequelize.transaction();
    try {
      await LabMembers.update(
        { firstname: firstname },
        { where: { id: id } },
        { transaction: trans }
      );
      await trans.commit();
    } catch (err) {
      console.log(`error : ${err}`);
      await trans.rollback();
      throw new Error('Error when update member');
    }
  },
  //#endregion
};

module.exports = LabMembersService;
