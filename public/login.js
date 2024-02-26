let loginSubmit = document.getElementById("login-submit");

loginSubmit.onclick = async function (event) {
    event.preventDefault();

    const apiUrl = "../api/users/login";
    //const apiUrl = "../api/users/";
    console.log("API", apiUrl);

    let inputUser = document.getElementById("login").value;
    console.log(inputUser)
    let inputPassword = document.getElementById("password").value;
    console.log(inputPassword);

    const data = {
        "login": inputUser,
        "pw": inputPassword
    };
    console.log(data);

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

       // res.redirect('localhost:3001/task'); // no
     // windows.location.href = '/task';
}