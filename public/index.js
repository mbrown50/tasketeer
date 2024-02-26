let inputModal = document.getElementById("input-modal");
let inputButton = document.getElementById("input-button");
let inputClose = document.getElementsByClassName("close")[0];
let inputSubmit = document.getElementById("input-submit");

inputButton.onclick = function () {
    console.log("open");
    inputModal.style.display = "block";
}

inputClose.onclick = function () {
    console.log("close");
    inputModal.style.display = "none";
}

inputSubmit.onclick = async function (event) {
    event.preventDefault();

    //console.log("submit");
    const apiUrl = "../api/tasks";

    console.log(apiUrl);

    let inputTitle = document.getElementById("input-title").value;
    let inputDate = document.getElementById("input-date").value;
    let inputTime = document.getElementById("input-time").value;
    let inputLocation = document.getElementById("input-location").value;
    let inputNotes = document.getElementById("input-notes").value;

    const data = {
        "task": inputTitle,
        "datetime": "2024-02-17T09:24:00.000Z",
        "location": inputLocation,
        "notes": inputNotes,
        "status_id": 1,
        "user_id": 1
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

    inputModal.style.display = "none";

    location.reload();
}
