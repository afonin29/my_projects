window.onload = function() {
    let div1 = document.getElementById("div1");


    window.addEventListener("keyup", function(e) {
        let coords = div1.getBoundingClientRect();
        let left = coords.left;
        let top = coords.top;
        let maxWidth = window.innerWidth - coords.width;
        let maxHeight = window.innerHeight - coords.height;
        let pressedKey = e.keyCode;



        if (pressedKey == 37 && left >= 10) {
            left -= 10;
            div1.style.left = left + "px";
        } else if (pressedKey == 37 && left < 10) {
            left = 0;
            div1.style.left = left + "px";
        }
        
        if (pressedKey == 38 && top >= 10) {
            top -= 10;
            div1.style.top = top + "px";
        } else if (pressedKey == 38 && top < 10) {
            top = 0;
            div1.style.top = top + "px";
        }

        if (pressedKey == 39 && left >= (maxWidth - 10)) {
            left = maxWidth;
            div1.style.left = left + "px";
        } else if (pressedKey == 39 && left < (maxWidth - 10)) {
            left += 10;
            div1.style.left = left + "px";
        }

        if (pressedKey == 40 && top >= (maxHeight - 10)) {
            top = maxHeight;
            div1.style.top = top + "px";
        } else if (pressedKey == 40 && top < (maxHeight - 10)) {
            top += 10;
            div1.style.top = top + "px";
        }

    }, false)
}