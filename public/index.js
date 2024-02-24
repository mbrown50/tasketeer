let inputModal = document.getElementById("input-modal");

let inputButton = document.getElementById("input-button");

let inputClose = document.getElementsByClassName("close")[0];

let inputSubmit = document.getElementById("input-submit");

inputButton.onclick = function(){
    inputModal.style.display = "block";
}

inputClose.onclick = function(){
    inputModal.style.display = "none";
}

// window.onclick = function(event) {
//     if (event.target != inputModal){
//         inputModal.style.display = "none";
//     }
// }

inputSubmit.onclick = function(event) {
    event.preventDefault();
    inputModal.style.display = "none";
}
