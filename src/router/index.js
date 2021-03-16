const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, ext) => {
    const cookie = req.cookies
    if (cookie['is_logged'] === 'true')
        res.sendFile('index.html', { root: path.join(__dirname, '../../public') });
    else
        res.redirect('/login')

})

router.get('/logout', (req, res, ext) => {
    const cookie = req.cookies
    res.cookie('is_logged', false)
    res.redirect('/')
})

const login = require('./login');
router.use('/login', login);

module.exports = router;
