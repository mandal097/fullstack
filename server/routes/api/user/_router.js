const router = require('express').Router();
const auth = require('../../../middlewares/jwtAuth');

const registration = require('./register');
const login = require('./login');
const deleteUser = require('./deleteUser');
const userData = require('./getUserData');
const profileUpdate = require('./profileUpdate');
const resetPassword = require('./resetPassword');
const sendOtp = require('./forgotPassword');
const forgotPassword = require('./forgotPassword');

router.use('/user', registration);

router.use('/user', login);

router.use('/user', sendOtp);

router.use('/user', forgotPassword);

router.use('/user/delete', auth, deleteUser);

router.use('/user/data', auth, userData);

router.use('/user/profile-update', auth, profileUpdate);

router.use('/user/reset-password', auth, resetPassword);


module.exports = router;