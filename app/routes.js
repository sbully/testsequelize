const express = require('express');
const router = express.Router();
const db = require('./services/dbconnectionservice');
const labMembers = require('./model/labmembers.model');
const CrudInstance = require('./services/crud.instance');

router.get('/', CrudInstance.findAllUser);
router.get('/add', CrudInstance.addUser);
router.get('/update', CrudInstance.updateUser);
router.get('/delete', CrudInstance.deleteUser);
router.get('/destroy', CrudInstance.destroyAll);

module.exports = router;
