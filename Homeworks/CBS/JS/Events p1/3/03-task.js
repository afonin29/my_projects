window.addEventListener("load", function () {
    let inp1 = document.getElementById("inp1");
    let p1 = document.getElementById("p1");
    let inp2 = document.getElementById("inp2");
    let div1 = document.getElementById("div1")

    inp1.addEventListener("keypress", keypress, false);
    p1.addEventListener("mousemove", mousemove, false);
    p1.addEventListener("mouseout", mouseout,false)
    inp2.addEventListener("click", onclick, false);

    function keypress(e) {
        let pressedkey = e.key;
        console.log(pressedkey);

        div1.innerHTML = "Была нажата кнопка: " + pressedkey;
    }

    function mousemove(e) {
        clX = e.clientX
        clY = e.clientY;
        
        div1.innerHTML = "Координата х относительно экрана браузера: " + clX + ", координата у относительно экрана браузера: " + clY;
    }

    function mouseout(e) {
        div1.innerHTML = "";
    }

    function onclick(e) {
        let date = new Date();
        console.log(date);
        div1.innerHTML = "Дата нажатия кнопки: " + date;
    }
}, false)
