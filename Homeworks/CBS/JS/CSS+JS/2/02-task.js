let login, password;

function buttonClick() {
    login = document.getElementById("loginbox");
    password = document.getElementById("passbox");

    loginvalue = document.getElementById("loginbox").value;
    passwordvalue = document.getElementById("passbox").value;
    let errp = document.getElementById("errorp");
    login.style.backgroundColor = "transparent";
    password.style.backgroundColor = "transparent";


    if (loginvalue == "" && passwordvalue == "") {
        errp.innerHTML = "Вы не заполнили поля логин и пароль";
        login.style.backgroundColor = "red";
        password.style.backgroundColor = "red";
    } else if (loginvalue == "") {
        errp.innerHTML = "Вы не заполнили поле логин";
        login.style.backgroundColor = "red";
    } else if (passwordvalue == "") {
        errp.innerHTML = "Вы не заполнили поле пароль";
        password.style.backgroundColor = "red";
    } else if (loginvalue == "admin" && passwordvalue == "12345") {
        errp.innerHTML = "Вы авторизованы!";
        login.style.backgroundColor = "green";
        password.style.backgroundColor = "green";
    } else {
        errp.innerHTML = "Попробуйте еще раз!";
    }
}