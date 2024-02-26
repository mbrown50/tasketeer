let loginSubmit = document.getElementById("login-submit");

//eraseCookie("connect.sid");
eraseCookie("user_id");

loginSubmit.onclick = async function (event) {
    event.preventDefault();

    const apiUrl = "../api/users/login";
    //console.log("API", apiUrl);

    let inputUser = document.getElementById("login").value;
    //console.log(inputUser)
    let inputPassword = document.getElementById("password").value;
    //console.log(inputPassword);

    const data = {
        "login": inputUser,
        "pw": inputPassword
    };
    //console.log(data);

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    fetch(apiUrl, requestOptions)
        .then(response =>
            response.json().then(data => ({
                data: data,
            })
            ).then(res => {
                /*  if (!response.ok) {
                     throw new Error('Network response was not ok');
                 } */
                // console.log(res.data),
                setCookie("user_id", res.data, 1);
                document.location.replace('/task');
                return;
            })
                .catch(error => {
                    console.error

                        ('Error:', error);
                })

        )
}

/*
    console.log("response start");
    console.log("response :", response);
    console.log("response end");
    // set user ID cookie now
   setCookie("user_id", 1, 1);
    //console.log("cooke: ", response.json());
   //response.json(); -- how to read back in user ID

     {
         "user": {
             "id": 6,
             "login": "mbrown50",
             "pw": "password"
         },
         "message": "You are now logged in!"
     } 
}) */

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

