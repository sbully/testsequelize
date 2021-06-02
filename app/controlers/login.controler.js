const LabMemberService = require('../services/labmember/labmember.service');
const bcrypt = require('bcryptjs');

const LoginControler = {
  login: async (req, res) => {
    if (req.body) {
      const { email, password } = req.body;
      try {
        console.log(email + ' ' + password);
        const logMembers = await LabMemberService.getLabMemberByEmail(email);
        if (
          logMembers &&
          (await bcrypt.compare(password, logMembers.password))
        ) {
          console.log('match');
          res.status(200);
          res.json(logMembers);
        } else {
          res.status(401);
          res.send('Wrong Email or Password');
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
