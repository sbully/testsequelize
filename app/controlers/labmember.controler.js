const LabMemberService = require('../services/labmember/labmember.service');

const LabMemberControler = {
  async getAllLabMembers(req, res) {
    try {
      const listLabMembers = await LabMemberService.getAllLabMembers();
      res.json(listLabMembers);
    } catch (e) {
      console.log(`error : ${e}`);
      res.status(401);
      res.send('Cannot load Members');
    }
  },
  async getLabMemberById(req, res) {
    if (parseInt(req.params.id)) {
      try {
        const labMember = await LabMemberService.getLabMemberById(
          req.params.id
        );
        res.json(labMember);
      } catch (e) {
        res.status(401);
        res.send('cannot find member');
      }
    } else {
      res.status(401);
      res.send('bad request');
    }
  },
  async deleteOneLabMember(req, res) {
    if (parseInt(req.params.id)) {
      try {
        await LabMemberService.deleteLabMember(req.params.id);
        console.log('delete succes');
      } catch (e) {
        console.log(`delete fail: ${e}`);
      }
    } else {
      console.log('wrong param');
    }
    res.redirect('/');
  },

  async addLabMember(req, res) {
    const newLabMember = req.body;
    console.log(newLabMember);
    try {
      await LabMemberService.addLabMember(newLabMember);
    } catch (error) {
      console.log(error);
      res.status(400);
      res.send('error when create Labmenber');
    }
    res.json(await LabMemberService.getLabMemberByEmail(newLabMember.email));
  },

  async updateLabMember(req, res) {
    const { id } = req.params;
    try {
      await LabMemberService.updateLabMember(req.params);
    } catch (err) {
      console.log(`Error when update: ${err}`);
    }
    res.json(await LabMemberService.getLabMemberById(id));
  },
};

module.exports = LabMemberControler;
