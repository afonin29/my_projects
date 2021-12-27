window.onload = function() {
    let form1 = document.forms[0];
    let login = form1.login;
    let watermark = login.dataset.watermark;
    initInput();

    function initInput() {
        login.value = watermark;
        login.style.color = "gray";
    }

    login.addEventListener("focus", function(e) {
        if (login.value == watermark) {
        login.value = "";
        login.style.color = "black";
        }
    }, false)

    login.addEventListener("blur", function(e) {
        if (login.value == "") {
        login.value = watermark;
        login.style.color = "gray";
        }
    }, false)

}