const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js'); 
const verifyToken = require('../middleware/verifyToken.js'); 

router.get('/', verifyToken, userController.fetchAllUsers);
router.get('/:id', verifyToken, userController.fetchUserById);
router.post('/', verifyToken, userController.addNewUser);
router.patch('/:id', verifyToken, userController.modifyUserById);
router.delete('/:id', verifyToken, userController.removeUserById);

module.exports = router;