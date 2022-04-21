const User = require('../../../models/user');
const bcrypt = require('bcryptjs');
const router = require('express').Router();

router.put('', async (req, res) => {

    if (req.body.password) {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        req.body.password = hashedPassword
    }
    try {
        const updatedUser = await User.findOneAndUpdate(req.user.id, {
            $set: req.body
        });
        res.status(201).json(updatedUser)

    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: 'server error ' + error
        })
    }

})





module.exports = router;