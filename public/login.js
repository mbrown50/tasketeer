let loginSubmit = document.getElementById("login-submit");
let loginAdd = document.getElementById("login-add");

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
    /* .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    }) */
        .then(response =>
            response.json().then(data => ({
                data: data,
            })
            ).then(res => {
                setCookie("user_id", res.data, 1);
                document.location.replace('/task');
                return response.json();;
            })
                .catch(error => {
                    console.error

                        ('Error:', error);
                })

        )
}

loginAdd.onclick = async function (event) {
    event.preventDefault();

    const apiUrl = "../api/users";

    let inputUser = document.getElementById("newLogin").value;
    let inputPassword = document.getElementById("newPassword").value;

    const data = {
        "login": inputUser,
        "pw": inputPassword
    };

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
}

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

