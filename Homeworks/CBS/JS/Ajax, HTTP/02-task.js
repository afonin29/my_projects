window.onload = function() {
    let btn = document.getElementById("but1");
    let eurp = document.getElementById("eur1");
    let usdp = document.getElementById("usd1");

    let btn2 = document.getElementById("but2");
    let eurp1 = document.getElementById("eur2");
    let usdp1 = document.getElementById("usd2");


    let obj;
    btn.addEventListener("click", function() {
        let xhr = new XMLHttpRequest;
        xhr.open("GET", "https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11", true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                obj = JSON.parse(xhr.response);

                eurp.innerHTML = obj[1].buy;
                usdp.innerHTML = obj[0].buy;
            }
        }

        xhr.send();
    }, false)

    btn2.addEventListener("click", function() {
        fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
        .then(function(data) {
            return data.json();
        })
        .then(function(data) {
            usdp1.innerHTML = data[0].sale;
            eurp1.innerHTML = data[1].sale;
        })
    }, false)
}