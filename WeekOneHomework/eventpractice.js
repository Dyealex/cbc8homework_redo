



let btn = document.querySelector("test-btn")
let form = document.querySelector("test-form")

function changeBtnText(event) {
    event.preventDefault();
    btn.innerHTML = "YAY!!!!"
}

function secondFunction() {
    btn.getElementsByClassName.backgroundColor = "red";
}

btn.onclick = changeBtnText;
btn.onclick = secondFunction;