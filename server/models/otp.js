const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    email: String,
    otp: String,
    expireIn: Number
}, { timestamps: true })

const Otp = new mongoose.model("Otp", otpSchema);

module.exports = Otp;