let module1 = {};
let newArray = [];

module1.highlightp = function () {
    let a = "p";

    let newArray  = document.getElementsByTagName(a);

    for (let i = 0; i < newArray.length; i++) {
        newArray[i].style.border = "5px solid red";
    }
}
module1.highlighta = function () {
    let a = "a";

    let newArray  = document.getElementsByTagName(a);

    for (let i = 0; i < newArray.length; i++) {
        newArray[i].style.border = "5px solid blue";
    }
}
module1.highlightdiv = function () {
    let a = "test_div";

    let myDiv  = document.getElementById(a);
    console.log(myDiv)
    myDiv.style.border = "5px solid yellow"
}