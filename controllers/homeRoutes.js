const router = require('express').Router();
// const { User } = require('../models');  use for autentication later

router.get('/', async (req, res) => {
    res.render('login');
});

module.exports = router;