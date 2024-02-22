const router = require('express').Router();
// const { User } = require('../models');  use for autentication later

router.get('/', async (req, res) => {
    res.render('login');
});

//test variables
const modelTemp = { 
    task: "js",
    date: "today",
    time: "right now",
    location: "right here",
    notes: "working"
}

const dbTemp = [
    temp1 = {task: "js",
        date: "today",
        time: "right now",
        location: "right here",
        notes: "working"},
    temp2 = {task: "js",
        date: "today",
        time: "right now",
        location: "right here",
        notes: "working"},
    temp3 = {task: "js",
        date: "today",
        time: "right now",
        location: "right here",
        notes: "working"},
    temp4 = {task: "js",
        date: "today",
        time: "right now",
        location: "right here",
        notes: "working"},
    temp5 = {task: "js",
        date: "today",
        time: "right now",
        location: "right here",
        notes: "working"},
    temp6 = {task: "js",
        date: "today",
        time: "right now",
        location: "right here",
        notes: "working"},
    temp7 = {task: "js",
        date: "today",
        time: "right now",
        location: "right here",
        notes: "working"},
]

router.get('/task', async (req, res) => {

    const db = dbTemp; // load database

    
    cardSet = getCards(db);

    // console.log("outcome " + cards[0].filled);

    console.log(cardSet)

    res.render('task', {cardSet});
})

module.exports = router;

getCards = function(db) {
    //Object stores info to be printed
let cardSet = [
        {filled:  false, data: 5},
        {filled:  false, data: 4},
        {filled:  false, data: 3},
        {filled:  false, data: 1},
    ];
    const pageCurrent = 1;
    
    const totalEntries = db.length; //find total entries
    console.log("currrent amount of entries " + totalEntries);
    
    const start = (pageCurrent-1)*4;// where to start loading entries
    console.log("start here " + start)
    
    const emptyCard = Math.abs((pageCurrent * 4) - totalEntries);
    console.log("empty cards " + emptyCard);
    
    for(i=0; i < 4-emptyCard; i++){
        propName = "card" + (i+1); //
        cardSet[i].data = db[start+i];
        cardSet[i].filled = true;
    }

    return cardSet;
}
