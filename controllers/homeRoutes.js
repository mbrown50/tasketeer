const router = require('express').Router();
const { Task } = require('../models');

router.get('/', async (req, res) => {
    res.render('login');
});

router.get('/task', async (req, res) => {
    let userID = 1;
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
