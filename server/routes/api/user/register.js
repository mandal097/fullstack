const router = require('express').Router();
const User = require('../../../models/user');
const bcrypt = require('bcryptjs');
const sendEmail = require('../../../config/sendMail');


router.post('/registration', async (req, res) => {
    const { name, email, contact, image, password } = req.body;
    try {
        const phoneEmail = email ? email : contact;
        const phoneEmailV = email ? 'email' : 'contact';

        if (!name || !email || !password) {
            return res.status(400).json({
                status: 'err',
                msg: "Please fill in all fields."
            })
        }
        const user = await User.findOne({ email });
        if (!user) {
            const hashPassword = await bcrypt.hashSync(password, 10);
            const newUser = new User({
                name,
                email,
                contact,
                image,
                password: hashPassword,
            })
            await newUser.save();

            sendEmail(email, name);

            res.status(201).json({
                status: "success",
                msg: "User Registered successfully",
                data: newUser
            })
        } else {
            res.status(400).json({
                status: "err",
                msg: `The user with this ${phoneEmailV} :  ${phoneEmail}  is already existed`
            })

        }


    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: 'server error' + error
        })
    }

})

module.exports = router;