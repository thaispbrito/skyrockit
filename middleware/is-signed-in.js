const isSignedIn = (req, res, next) => {

    // is the user logged in
    // go to "next" middleware
    if (req.session.user) return next();

    // else: they need to login
    res.redirect('/auth/sign-in');
};

module.exports = isSignedIn;