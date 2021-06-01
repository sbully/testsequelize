const LabMemberService = require('../services/labmember/labmember.service');

const LoginControler = {
  login: async (req, res) => {
    console.log(`req body : ${req.body}`);

    if (req.body) {
      const { email, password } = req.body;
      try {
        console.log(email + ' ' + password);
        const logMembers = await LabMemberService.getLabMembersLogin(
          email,
          password
        );
        if (logMembers) {
          res.status(200);
          res.json(logMembers);
        } else {
          res.status(401);
          res.send('wrong login or password');
        }
      } catch (err) {
        res.status(400);
        res.send(err);
      }
    } else {
      res.status(400);
      res.send('body request missing');
    }
  },
};

module.exports = LoginControler;
