const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');

router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);
router.get('/dashboard', userController.profile);
router.get('/sign-out', userController.signOut);
router.post('/create', userController.create);
router.post('/create-session', userController.createSession);

module.exports = router;