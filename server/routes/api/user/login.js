const router = require('express').Router();
const User = require('../../../models/user');
const bcrypt = require('bcryptjs');
const sendEmail = require('../../../config/sendOtp');
const Otp = require('../../../models/otp');
const generateToken = require('../../../config/jwtToken');
const loginMail = require('../../../config/loginmail');


// router.post('/send-otp', async (req, res) => {
//     const { email, contact } = req.body;
//     try {
//         // const condition = contact ? contact : email
//         const user = contact
//             ? await User.findOne({ contact })
//             : await User.findOne({ email })

//         if (!user) {
//             res.json({
//                 status: 'err',
//                 code: 2,
//                 msg: 'user not found'
//             })
//         } else {
//             let number = Math.floor(1000 + Math.random() * 9000);

//             const otp = new Otp({
//                 userId: user._id,
//                 otp: number
//             })

//             await otp.save()
//             sendEmail(email ? email : user.email, user.name, number)

//             res.json({
//                 status: 'success',
//                 code: 3,
//                 data: otp
//             })

//         }

//     } catch (error) {
//         res.status(501).json({
//             status: 'err',
//             code: 1,
//             msg: error.message
//         })
//     }
// })



// router.post('/login-otp', async (req, res) => {
//     const { email, contact, otp } = req.body;
//     try {
//         const phoneEmail = email ? email : contact;
//         const user = await User.findOne({ phoneEmail });
//         const userId = user._id;
//         console.log(`user id ${userId}`);
//         const checkOtp = await Otp.find({ userId })
//         console.log(checkOtp.pop());
//         if ((email || contact) && otp) {

//             if (otp === checkOtp.pop().otp) {
//                 const _user = {
//                     id: user._id,
//                     name: user.name,
//                     email: user.email,
//                     contact: user.contact,
//                     image: user.image
//                 }
//                 res.status(201).json({
//                     status: 'success',
//                     data: _user
//                 })
//             } else {
//                 res.status(404).json({
//                     status: 'err',
//                     msg: 'Otp Mismatched'
//                 })
//             }
//         } else {
//             res.status(404).json({
//                 status: 'err',
//                 msg: 'Please fill Otp'
//             })

//         }
//     } catch (error) {
//         res.status(501).json({
//             status: 'err',
//             msg: 'server error' + error
//         })
//     }
// })



router.post('/login', async (req, res) => {
    const { email, contact, password } = req.body;
    try {
        let phoneEmailV = email ? 'email' : 'contact'
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({
                status: "err",
                msg: `This ${phoneEmailV} does not exist.`
            })
        } else {
            const isMatched = await bcrypt.compare(password, user.password);
            if (!isMatched) {
                res.status(400).json({
                    status: "err",
                    msg: "Invalid Credentials"
                })
            }

            let id = user._id
            let obj = {
                id: user._id,
                name: user.name,
                email: user.email,
                contact: user.contact
            }
            const token = generateToken({ id, email });

            if (!token) {
                res.status(400).json({
                    status: "err",
                    msg: "Something went wrong in token generation"
                })
            } else {
                res.status(201).json({
                    status: "success",
                    token: token,
                    data: obj
                })
                loginMail(email, user.name)
            }
        }


    } catch (error) {
        res.status(501).json({
            status: 'err',
            msg: 'server error' + error
        })
    }
})



module.exports = router;