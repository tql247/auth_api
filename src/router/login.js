const express = require('express');
const router = express.Router();
const passport = require('../auth/google');
const path = require("path");

router.get('/', async function(req, res, next) {
    res.sendFile('login.html', { root: path.join(__dirname, '../../public') });
})

router.get(
    '/google',
    passport.authenticate(
        'google',
        { scope: ['profile']},
        function (req, res) {
            console.log('req')
            console.log('res')
        }
    )
)

router.get(
    '/auth/google/callback',
    function (req, res) {
        res.cookie('is_logged', true)
        res.redirect('/')
    }
);


module.exports = router;