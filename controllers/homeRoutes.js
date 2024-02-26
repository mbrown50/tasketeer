const router = require('express').Router();
const { Task } = require('../models');

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

function getCookieValue(req,key) {
    //var cookies = document.cookie.split('; ');
    var cookies = req.headers.cookie.split(';');
    //console.log(cookies);
    //console.log(key);
    for (var i = 0, parts; (parts = cookies[i] && cookies[i].split('=')); i++) {
        //console.log(parts.shift().trim(), " ", key.trim());
        var partName = parts.shift().trim();
        var partValue = parts.shift().trim();
        //console.log(partName); // value is here!!
        //console.log(key)
        if (partName == key.trim()) {
        //if (parts.shift().trim() === key.trim()) {
        //console.log("match");
        //return decode(parts.join('='));
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
   // var userCookie = getcookie(res);
    var userValue = getCookieValue(req, "user_id");
    //console.log(userValue);

    let userID = userValue;
    //let userID = userCookie.user_id;
    try {
        const db = await Task.findAll({
           where:{
            user_id: userID
           },  
           order: [
           ['datetime', 'ASC'],
           ['id', 'ASC'],
           ],
        });

        cardSet = db.map((task) => task.get({ plain: true }));

        // console.log(cardset);

        res.render('task', {cardSet});

        // testing multiple cards

       // cardSet = db.map((task) => task.get({ plain: true }));
       // console.log(cardSet)
       // res.render('task', {cardSet});
    
        }catch(err){
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
