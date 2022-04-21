const mongoose = require('mongoose');


const uri = process.env.DB

mongoose.connect(uri, {
    useNewUrlParser: true,
}).then(() => {
    console.log(`connection successfull....`)
}).catch((error) => {
    console.log(`conncetion failed....${error} `)
})