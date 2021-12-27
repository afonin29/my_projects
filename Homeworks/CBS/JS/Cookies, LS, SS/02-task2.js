window.onload = function() {
    let key, value;
    let info = document.getElementById("info");
    for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        value = JSON.parse(localStorage.getItem(key));
        info.innerHTML += "В корзине: телевизор " + value.name + " с артикулом " + value.art + " стоимостью " + value.price + " <br />";
    }
}