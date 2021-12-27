window.onload = function() {
    let color = document.getElementById("color");
    let number = document.getElementById("number");
    let btn = document.getElementById("button");
    setColorAndSize();

    btn.addEventListener("click", function(e) {
        colorValue = getSelectedColor();
        fontSize = getFontSize();
        if (fontSize === undefined) {
            document.getElementById("numberSpan").innerHTML = "Введите размер шрифта";
        } else {
            localStorage.setItem("color", colorValue);
            localStorage.setItem("fontSize", fontSize);
        }
        setColorAndSize();
    }, false)

    function setColorAndSize() {
        if (window.localStorage.color) {
            document.body.style.background = window.localStorage.color;
        }
        if (window.localStorage.fontSize) {
            document.body.style.fontSize = window.localStorage.fontSize;
        }
    }

    function getSelectedColor() {
        let colorValueIndex = color.options.selectedIndex;
        return color.options[colorValueIndex].value;
    }
    function getFontSize() {
        let fontSize = number.value;
        if (fontSize != "") {
        return fontSize + "px"; 
        }
    }
}