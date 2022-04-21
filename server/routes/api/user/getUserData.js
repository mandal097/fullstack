const User = require('../../../models/user');

const router = require('express').Router();

router.get('', async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.status(200).json({
            status: "success",
            data: user
        })
    } catch (err) {
        res.status(501).json({
            status: 'err',
            msg: 'server error' + error
        })
    }
})


module.exports = router;