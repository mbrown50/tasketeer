let inputModal = document.getElementById("input-modal");

let inputButton = document.getElementById("input-button");

let inputClose = document.getElementsByClassName("close");

let inputSubmit = document.getElementById("input-submit");

inputButton.onclick = function(){
    inputModal.style.display = "block";
}

inputClose.onclick = function(){
    inputModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target != modal){
        inputModal.style.display = "none";
    }
}

inputSubmit.onclick = function(event) {
    event.preventDefault();
}
