let module1 = {};

 

let rand;

window.onload = function() {

    rand = Math.round(1 - 0.5 + Math.random() * (100 - 1 + 1));

    console.log(rand)

}

 

function getElement() {

    let value = Number(document.getElementById("game").value);

 

    if (value > rand) {

        alert("This number is too large");

    } else if (value < rand) {

        alert("This number is too small");

    } else {

        document.getElementById("hiddenp").innerHTML = "This value is " + rand;

        document.getElementById("hiddenp").className = "correctp";

        alert("Correct!")

    }

}