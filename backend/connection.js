const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.MONGODB_URL;

mongoose.connect(url)
    .then((result) => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(error);

    });

module.exports = mongoose;