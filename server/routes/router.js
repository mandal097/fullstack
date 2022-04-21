const router = require('express').Router();

const userCredentials = require('./api/user/_router')

router.use('/api', userCredentials)

module.exports = router;