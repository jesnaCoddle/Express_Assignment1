const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
// const verifyToken = require('../controllers/authController');


router.get('/', userController.fetchAllUsers);
router.get('/:id', userController.fetchUserById);
router.post('/', userController.addNewUser);
router.patch('/:id', userController.modifyUserById);
router.delete('/:id', userController.removeUserById);

module.exports = router;
