const User = require('../../../models/user');
const bcrypt = require('bcryptjs');
const router = require('express').Router();

router.post('', async (req, res) => {
    try {
        const { password } = req.body
        console.log(password)
        const passwordHash = await bcrypt.hash(password, 12)

        await User.findOneAndUpdate({ _id: req.user.id }, {
            password: passwordHash
        })

        res.json({
            status: "succcess",
            msg: "Password successfully changed!"
        })
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
})





module.exports = router;