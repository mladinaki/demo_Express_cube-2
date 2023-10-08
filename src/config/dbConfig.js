const mongoose = require('mongoose');
const {URL} = require('../../constant')

async function dbConnect() {
    await mongoose.connect(URL);
}

module.exports = dbConnect;