
const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController.js');

// const verifyToken = require('../middleware/verifyToken.js');

// router.get('/', verifyToken, userController.fetchAllUsers);
// router.get('/:id', verifyToken, userController.fetchUserById);
// router.post('/', verifyToken, userController.addNewUser);
// router.patch('/:id', verifyToken, userController.updateUserById);
// router.delete('/:id', verifyToken, userController.removeUserById);

router.get('/', userController.fetchAllUsers);
router.get('/:id', userController.fetchUserById);
router.post('/', userController.addNewUser);
router.patch('/:id', userController.updateUserById);
router.delete('/:id', userController.removeUserById);

module.exports = router;
