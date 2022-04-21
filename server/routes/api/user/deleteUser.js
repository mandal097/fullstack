const User = require('../../../models/user');
const router = require('express').Router();

router.delete('', async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.user.id);
        res.status(201).json({
            status: 'success',
            msg: 'Deleted Successfully',
            data: deleteUser
        })
    } catch (error) {
        res.status(500).json({ message: `error in server - ${error}` })
    }
})





module.exports = router;