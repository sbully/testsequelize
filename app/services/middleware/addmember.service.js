const AddMemberService = {
  isCompleteMember(req, res, next) {
    const { firstname, lastname, email, password, role } = req.body;
    if (firstname && lastname && email && password && role) {
      next();
    } else {
      res.status(401);
      res.send('member not complete');
    }
  },
};

module.exports = AddMemberService;
