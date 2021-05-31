const express = require('express');
const router = express.Router();
const LabMemberControler = require('./controlers/labmember.controler');
const ProjectControler = require('./controlers/project.controler');
const AddMemberService = require('./services/middleware/addmember.service');
/* const db = require('./services/dbconnectionservice');
const labMembers = require('./model/labmembers.model');
const CrudInstance = require('./services/crud.instance'); */
/**
 * Premiere route avec CRUD evant implementation migration/seed
 */
/*
router.get('/', CrudInstance.findAllUser);
router.get('/add', CrudInstance.addUser);
router.get('/update', CrudInstance.updateUser);
router.get('/delete', CrudInstance.deleteUser);
router.get('/destroy', CrudInstance.destroyAll);
*/

router.get('/', LabMemberControler.getAllLabMembers);
router.get('/one/:id', LabMemberControler.getOneLabMember);
router.post(
  '/add/:name',
  AddMemberService.createMember, //creation d'un membre et envoi dans la requete
  AddMemberService.isCompleteMember, // verification de la conformité du membre dans la requete
  LabMemberControler.addLabMember
);
router.post('/delete/:id', LabMemberControler.deleteOneLabMember);
router.post('/update/:id&:firstname', LabMemberControler.updateLabMember);

router.get('/projects', ProjectControler.getAllProject);
router.get('/projects/:id', ProjectControler.getOneProject);

module.exports = router;
