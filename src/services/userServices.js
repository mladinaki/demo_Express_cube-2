const Users = require('../models/User');
const bcrypt = require('bcrypt');

//Create Register
exports.register = (userData) => Users.create(userData);

exports.login = async (username, password) => {
    const user = await Users.findOne({ username });

    //Validate user
    if (!user) {
        throw new Error('Cannot username or password');
    }

    //Validate password
    const isValid = await bcrypt.compare(password, user.password);
    console.log({ isValid });

    if (!isValid) {
        throw new Error('Cannot username or password!!!');
    }
    return user;
}

