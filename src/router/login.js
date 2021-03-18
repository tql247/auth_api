const express = require('express');
const router = express.Router();
const google = require('../auth/google');
const facebook = require('../auth/facebook');
const path = require("path");

router.get('/', async function (req, res, next) {
    res.sendFile('login.html', {root: path.join(__dirname, '../../public')});
})

router.get(
    '/google',
    google.authenticate(
        'google',
        {scope: ['profile']},
        function (req, res) {
            //    do something
        }
    )
)

router.get(
    '/google/callback',
    function (req, res) {
        res.cookie('is_logged', true)
        res.redirect('/')
    }
);

router.get(
    '/facebook',
    facebook.authenticate(
        'facebook',
        {scope: ['public_profile']},
        function (req, res) {
        //    do something
        }
    )
);

router.get(
    '/facebook/callback',
    function(req, res) {
        res.cookie('is_logged', true)
        res.redirect('/')
    }
);


module.exports = router;