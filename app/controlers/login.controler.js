const LabMemberService = require('../services/labmember/labmember.service');

const LoginControler = {
  login: async (req, res) => {
    console.log(`req body : ${req.body}`);
    if (req.body) {
      const { email, password } = req.body;
      /*
	  const email = 'toto@gmail.com';
      const password = 'passwordTT'; 
	  */
      try {
        console.log(email + ' ' + password);
        await LabMemberService.getLabMembersLogin(email, password);
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
