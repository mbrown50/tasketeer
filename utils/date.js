
// using date-fns
// issues with date-fns, can't import or require...

//// similar, behave differently
//Import ES6 JavaScript
//Require pre ES6 

// import { isThisWeek, isToday } from "./node_modules/date-fns/esm/index.js";
//const { isThisWeek, isToday } = require("date-fns");

const {isThisWeek, isToday} = require('date-fns');

const isToday = () => {
    console.log("Today?", isToday(new Date()));        // true
}

module.exports = isToday;

/*
const fns = require('date-fns')
console.log(fns.format(new Date(), "'Today is a' eeee"))
*/


//console.log("This Week?", isThisWeek(new Date())); // true

//import { parse } from 'date-fns';

//import { format } from "date-fns";
//import { format } from 'date-fns';
//window.dateFns = require('date-fns');

//const date = new Date();
//const formattedDate = dateFns.format(date, 'dd/MM/yyyy');

// helloName.innerHTML = "Datetime: " + Date();
