const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const userController = require('../controllers/user_controller');


router.use('/', require('./home'));
router.use('/user', require('./user'));

module.exports = router;