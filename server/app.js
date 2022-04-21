const express = require('express');
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path')
const cookieParser = require('cookie-parser');

dotenv.config();
require('./config/conn')

const baseRouter = require('./routes/router')

app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    res.send(`Welcome to the authentication app <br> You are at API Side`);
});

app.use('/', baseRouter)

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`the server is running at port no. ${port}`);
})