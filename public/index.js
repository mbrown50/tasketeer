let inputButton = document.getElementById("input-button");
let inputClose = document.getElementsByClassName("close")[0];
let userButton = document.getElementById("user-button");
let logoutButton = document.getElementById("logout-button");
let inputSubmit = document.getElementById("input-submit");
let inputModal = document.getElementById("input-modal");
let helloName = document.getElementById("helloName");


// using date-fns
// issues with date-fns, can't import or require...

//import { isThisWeek, isToday } from "./node_modules/date-fns/esm/index.js";
//console.log("Today?", isToday(new Date()));        // true
//console.log("This Week?", isThisWeek(new Date())); // true

//import { parse } from 'date-fns';

//import { format } from "date-fns";
//import { format } from 'date-fns';
//window.dateFns = require('date-fns');

//const date = new Date();
//const formattedDate = dateFns.format(date, 'dd/MM/yyyy');

helloName.innerHTML = "Datetime: " + Date();


inputButton.onclick = function () {
    //console.log("open");
    inputModal.style.display = "block";
}

inputClose.onclick = function () {
    //console.log("close");
}

logoutButton.onclick = function (event) {
    event.preventDefault();

    const apiUrl = "../api/users/logout";

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            eraseCookie("connect.sid");
            eraseCookie("user_id");
            document.location.replace('/');
            return response.json();
        })
        .catch(error => {
            console.error

                ('Error:', error);
        })
}

inputClose.onclick = function () {
    //console.log("close");
    inputModal.style.display = "none";
}

inputSubmit.onclick = async function (event) {
    event.preventDefault();

    //console.log("submit");
    const apiUrl = "../api/tasks";

    //console.log(apiUrl);

    let inputTitle = document.getElementById("input-title").value;
    let inputDate = document.getElementById("input-date").value;
    let inputTime = document.getElementById("input-time").value;
    let inputLocation = document.getElementById("input-location").value;
    let inputNotes = document.getElementById("input-notes").value;

    var cookieValue = getCookie("user_id");
    //console.log("cookie! " + cookieValue);

    const data = {
        "task": inputTitle,
        "datetime": "2024-02-17T09:24:00.000Z",
        "location": inputLocation,
        "notes": inputNotes,
        "status_id": 1,
        "user_id": cookieValue,
    };

    // console.log(data);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    fetch(apiUrl, requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error

                ('Error:', error);
        })

    inputModal.style.display = "none";

     document.location.reload();

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookieName(name) {
    const getCookieValue = (name) => (
        document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
    )
    //return getCookieValue;
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}
