const express = require('express');
const router = express.Router();
const LabMemberControler = require('./controlers/labmember.controler');
const ProjectControler = require('./controlers/project.controler');
const AddMemberService = require('./services/middleware/addmember.service');
const LoginControler = require('./controlers/login.controler');

router.get('/', LabMemberControler.getAllLabMembers);
router.get('/one/:id', LabMemberControler.getLabMemberById);
router.post(
  '/add',

  AddMemberService.isCompleteMember, // verification de la conformité du membre dans la requete
  LabMemberControler.addLabMember
);
router.post('/delete/:id', LabMemberControler.deleteOneLabMember);
router.post('/update/:id&:firstname', LabMemberControler.updateLabMember);

router.get('/projects', ProjectControler.getAllProject);
router.get('/projects/:id', ProjectControler.getOneProject);

router.post('/login', LoginControler.login);

module.exports = router;
