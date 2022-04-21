const nodemailer = require('nodemailer');


const sendOtpMail = (email, name, otp) => {
    var transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'amarnathmandal097@gmail.com',
            pass: 'fhjmnnrxxzlzffwd'
        }
    });

    const mailOption = {
        from: 'amarnathmandal097@gmail.com',
        to: email,
        subject: `Otp mail from Amarnath`,
        html: `<h1>hi</h1>
    <h2>${name}</h2>
    <p>Your otp is ${otp}</p>
    <span>AMARNATH KUMAR MANDAL </span>
    `
    };

    transport.sendMail(mailOption, function (err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('email sent to ' + name + info.response);
        }
    })
}


module.exports = sendOtpMail