const router = require('express').Router();
const { Task } = require('../models');
const { User } = require('../models');

const app = require('express')();

app.use('/', (req, res) => {
    var cookie = getcookie(req);
    // console.log(cookie);
});

function getcookie(req) {
    var cookie = req.headers.cookie;
    // user=someone; session=mySessionID
    return cookie.split(';');
}

function getCookieValue(req, key) {

    var cookies = req.headers.cookie.split(';');

    for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {

        var partName = parts.shift().trim();
        var partValue = parts.shift().trim();

        if (partName == key.trim()) {
            return partValue;
        }
    }
    return null;
}

function decode(s) {
    return decodeURIComponent(s.replace(/\+/g, ' '));
}

router.get('/', async (req, res) => {
    res.render('login');
});

router.get('/task', async (req, res) => {
    var userValue = getCookieValue(req, "user_id");

    let userID = userValue;

    try {
        const db = await Task.findAll({
            where: {
                user_id: userID
            },
            order: [
                ['datetime', 'ASC'],
                ['id', 'ASC'],
            ],
        });

        cardSet = db.map((task) => task.get({ plain: true }));

        res.render('task', { cardSet });

        const userLogin = await User.findAll({
            where: {
                id: userID
            },
            attributes: ['login'],
            raw: true,
        });

        //console.log(userLogin[0]);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/task');
        return;
    }
    res.render('login');
});

module.exports = router;
