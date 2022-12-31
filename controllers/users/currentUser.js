const getCurrentUser = async (req, res) => {
    // const { email } = req.user;
    // const { name, email, photo, birthday, phone, city, favoritesAds, refreshToken } = req.user;

    // res.status(200).json({ name, email, photo, birthday, phone, city, favoritesAds, refreshToken });
    res.status(200).json({ user: req.user });
}

module.exports = getCurrentUser;