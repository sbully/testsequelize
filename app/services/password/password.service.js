const bcrypt = require('bcryptjs');

const PasswordService = {
  getHashPassword: (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  },
};

module.exports = PasswordService;
