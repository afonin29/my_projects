let mArr = [];
let counter;

window.onload = function () {
    mArr = document.getElementsByTagName("div");
    counter = 0;
}

function buttonClick() {
    for (i = 0; i < mArr.length; i++) {
        mArr[i].style.backgroundColor = "green";
    }
    mArr[counter].style.backgroundColor = "red";
    counter = (counter + 1) % mArr.length;
}