const bcrypt = require('bcryptjs');
const { createError } = require('../../helpers/createError');
const User = require('../../models/userModel');
require('dotenv').config();

const forgotUserPassword = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(password);

    if (!user) {
        throw createError({ status: 409, message: `No user with e-mail ${email} found` });
    }

    const bcryptHashPassword = await bcrypt.hash(password, 10);

    await User.findByIdAndUpdate(user._id, { password: bcryptHashPassword });

    res.status(200).json({ message: `Created new password for user ${user.name}` });
}

module.exports = forgotUserPassword;