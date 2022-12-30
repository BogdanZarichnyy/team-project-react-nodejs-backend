const getCurrentUser = async (req, res) => {
    // const { email } = req.user;

    // res.status(200).json({ email });
    res.status(200).json({ user: req.user });
}

module.exports = getCurrentUser;