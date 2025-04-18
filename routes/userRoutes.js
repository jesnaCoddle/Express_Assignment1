const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController.js');
const verifyToken = require('../middleware/verifyToken.js');

router.get('/get-users', verifyToken, userController.fetchAllUsers);
router.get('/get-user/:id', verifyToken, userController.fetchUserById);
router.post('/create-user', verifyToken, userController.addNewUser);
router.patch('/edit-/user/:id', verifyToken, userController.updateUserById);
router.delete('/delete/:id', verifyToken, userController.removeUserById);

module.exports = router;
