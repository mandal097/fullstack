const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
    },
    contact: {
        type: Number,
        unique: true,
    },
    image: {
        type: String,
        default: 'https://images.unsplash.com/photo-1620632523414-054c7bea12ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlciUyMGljb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

module.exports = User;