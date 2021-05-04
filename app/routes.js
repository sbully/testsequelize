const express = require('express');
const router = express.Router();
const db = require('./services/dbconnectionservice');
const labMembers = require('./model/labmembers.model');

// get list of labmembers
router.get('/', (req, res) =>
  labMembers
    .findAll()
    .then((storedLabMembers) => {
      console.log(storedLabMembers);
      res.send(storedLabMembers);
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
      res.sendStatus(401);
    })
);

// add a labmembers
router.get('/add', (req, res) => {
  const data = {
    firstname: 'Pierre',
    lastname: 'Pierre',
    email: 'pierre@gmail.com',
    role: 'Member',
  };

  labMembers
    .create({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      role: data.role,
    })
    .then((storedLabMembers) => res.redirect('/'))
    .catch((err) => {
      console.log(`error when create : ${err}`);
    });
});

module.exports = router;
