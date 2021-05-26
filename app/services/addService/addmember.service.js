const AddMemberService = {
  isCompleteMember(req, res, next) {
    const { firstname, lastname, email, role } = req.body;
    if (firstname && lastname && email && role) {
      next();
    } else {
      res.status(401);
      res.send('member not complete');
    }
  },

  async createMember(req, res, next) {
    if (
      req.params.name !== null &&
      (req.params.name === 'seb' || req.params.name === 'tata')
    ) {
      let member;
      if (req.params.name === 'seb') {
        member = {
          firstname: 'seb',
          lastname: 'sebastien',
          email: 'seb@gmail.com',
          role: 'User',
        };
      } else if (req.params.name === 'tata') {
        member = {
          firstname: 'tata',
          lastname: 'tata',
          email: 'tata@gmail.com',
        };
      }
      req.body = member;
      next();
    } else {
      res.send('bad request');
    }
  },
};

module.exports = AddMemberService;
