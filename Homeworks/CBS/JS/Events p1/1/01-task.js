function add() {
    let value1 = Number(document.getElementById("text1").value);
    let value2 = Number(document.getElementById("text2").value);
    let sum;

    if (value1 != "" && value2 != "") {
        sum = value1 + value2;
        document.getElementById("result").value = sum;
    } else {
        alert("Введите корректные значения!")
    }
}

function minus() {
    let value1 = Number(document.getElementById("text1").value);
    let value2 = Number(document.getElementById("text2").value);
    let minus;

    if (value1 != "" && value2 != "") {
        minus = value1 - value2;
        document.getElementById("result").value = minus;
    } else {
        alert("Введите корректные значения!")
    }
}

function multiply() {
    let value1 = Number(document.getElementById("text1").value);
    let value2 = Number(document.getElementById("text2").value);
    let mult;

    if (value1 != "" && value2 != "") {
        mult = value1 * value2;
        document.getElementById("result").value = mult;
    } else {
        alert("Введите корректные значения!")
    }
}

function divide() {
    let value1 = Number(document.getElementById("text1").value);
    let value2 = Number(document.getElementById("text2").value);
    let divide;

    if (value1 != "" && value2 != "") {
        divide = value1 / value2;
        document.getElementById("result").value = divide;
    } else {
        alert("Введите корректные значения!")
    }
}

let btn1, btn2, btn3, btn4;
window.addEventListener("load", function() {
    let btn1 = document.getElementById("add1");
    let btn2 = document.getElementById("minus1");
    let btn3 = document.getElementById("multiply1");
    let btn4 = document.getElementById("divide1");


    btn1.addEventListener("click", function() {
        let value1 = Number(document.getElementById("text11").value);
        let value2 = Number(document.getElementById("text21").value);
        let sum;
        
        if (value1 != "" && value2 != "") {
            sum = value1 + value2;
            document.getElementById("result1").value = sum;
        } else {
            alert("Введите корректные значения!")
        }
    }, false)

    btn2.addEventListener("click", function() {
        let value1 = Number(document.getElementById("text11").value);
        let value2 = Number(document.getElementById("text21").value);
        let minus;
        
        if (value1 != "" && value2 != "") {
            minus = value1 - value2;

            document.getElementById("result1").value = minus;
        } else {
            alert("Введите корректные значения!")
        }
    }, false)

    btn3.addEventListener("click", function() {
        let value1 = Number(document.getElementById("text11").value);
        let value2 = Number(document.getElementById("text21").value);
        let mult;
        
        if (value1 != "" && value2 != "") {
            mult = value1 * value2;
            mult = mult.toFixed(2);

            document.getElementById("result1").value = mult;
        } else {
            alert("Введите корректные значения!")
        }
    }, false)

    btn4.addEventListener("click", function() {
        let value1 = Number(document.getElementById("text11").value);
        let value2 = Number(document.getElementById("text21").value);
        let div;
        
        if (value1 != "" && value2 != "") {
            div = value1 / value2;
            div = div.toFixed(2);
            
            document.getElementById("result1").value = div;
        } else {
            alert("Введите корректные значения!")
        }
    }, false)

}, false)

