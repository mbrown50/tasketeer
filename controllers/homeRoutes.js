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
           } 
        })
        cardSet = db.map((task) => task.get({ plain: true }));

        console.log(cardSet)

        res.render('task', {cardSet});
    
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
})

module.exports = router;
