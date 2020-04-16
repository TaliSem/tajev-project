const router = require('express').Router();

// auth login
router.get('/loginGoogle', (req, res) => {
    res.render('loginloginGoogle', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});

// auth with google+
router.get('/google', (req, res) => {
    // handle with passport
    res.send('logging in with Google');
});

module.exports = router;