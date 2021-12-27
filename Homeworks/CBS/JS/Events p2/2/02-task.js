window.onload = function() {
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    let div4 = document.getElementById("div4");

    let divs = document.getElementsByTagName("div");

    window.addEventListener("keypress", function(e) {
        if(!e) e = window.event; 
        let pressedKey = e.key;
        console.log(pressedKey)
        if (pressedKey == "r") {
            for (i = 0; i < divs.length; i++) {
                divs[i].style.color = "red";
            }
        } else if (pressedKey == "g") {
            for (i = 0; i < divs.length; i++) {
                divs[i].style.color = "green";
            }
        } else if (pressedKey == "b") {
            for (i = 0; i < divs.length; i++) {
                divs[i].style.color = "blue";
            }
        }
    },
    false)
}