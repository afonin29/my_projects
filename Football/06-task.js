window.onload = function() {
    let ball = document.querySelector('#ball');
    let field = document.querySelector('#field');
    let coords = ball.getBoundingClientRect();
    const beginLeft = coords.left;
    const beginTop = coords.top;
    let left = coords.left;
    let top = coords.top;
    let score1 = 0;
    let score2 = 0;
    let width = Number(window.getComputedStyle(field).width.slice(0, window.getComputedStyle(field).width.indexOf('px')));
    let scorefirst = document.querySelector('#first');
    let scoresecond = document.querySelector('#second');
    

    window.addEventListener('keyup', function(e) {

        if (e.key === "ArrowLeft") {
            left -= 20;
            ball.style.left = left + 'px';
        } else if (e.key === "ArrowRight") {
            left += 20;
            ball.style.left = left + 'px';
        } else if (e.key === "ArrowUp") {
            top -= 20;
            ball.style.top = top + 'px';
        } else if (e.key === "ArrowDown") {
            top += 20;
            ball.style.top = top + 'px';
        }

        if (left <= 0 && top >= 209 && top <= 336) {
            alert("Goal!");
            score2++;
            ball.style.left = beginLeft + 'px';
            ball.style.top = beginTop + 'px';
            left = beginLeft;
            top = beginTop;
        } else if (left <= 0) {
            alert('Missed!');
            ball.style.left = beginLeft + 'px';
            ball.style.top = beginTop + 'px';
            left = beginLeft;
            top = beginTop;
        } else if (left >= (width-50) && top >= 209 && top <= 336) {
            alert("Goal!");
            score1++;
            ball.style.left = beginLeft + 'px';
            ball.style.top = beginTop + 'px';
            left = beginLeft;
            top = beginTop;
        } else if (left >= (width-50)) {
            alert('Missed!');
            ball.style.left = beginLeft + 'px';
            ball.style.top = beginTop + 'px';
            left = beginLeft;
            top = beginTop;
        } else if (top <= 0 || top >= 520) {
            this.alert('Out of the field!');
            ball.style.left = beginLeft + 'px';
            ball.style.top = beginTop + 'px';
            left = beginLeft;
            top = beginTop;
        }
        scorefirst.innerHTML = `Team A: ${score1}`;
        scoresecond.innerHTML = `Team B: ${score2}`;
    }, false)
}


// window.onload = function() {
//     let div1 = document.getElementById("div1");


//     window.addEventListener("keyup", function(e) {
//         let coords = div1.getBoundingClientRect();
//         let left = coords.left;
//         let top = coords.top;
//         let maxWidth = window.innerWidth - coords.width;
//         let maxHeight = window.innerHeight - coords.height;
//         let pressedKey = e.keyCode;



//         if (pressedKey == 37 && left >= 10) {
//             left -= 10;
//             div1.style.left = left + "px";
//         } else if (pressedKey == 37 && left < 10) {
//             left = 0;
//             div1.style.left = left + "px";
//         }
        
//         if (pressedKey == 38 && top >= 10) {
//             top -= 10;
//             div1.style.top = top + "px";
//         } else if (pressedKey == 38 && top < 10) {
//             top = 0;
//             div1.style.top = top + "px";
//         }

//         if (pressedKey == 39 && left >= (maxWidth - 10)) {
//             left = maxWidth;
//             div1.style.left = left + "px";
//         } else if (pressedKey == 39 && left < (maxWidth - 10)) {
//             left += 10;
//             div1.style.left = left + "px";
//         }

//         if (pressedKey == 40 && top >= (maxHeight - 10)) {
//             top = maxHeight;
//             div1.style.top = top + "px";
//         } else if (pressedKey == 40 && top < (maxHeight - 10)) {
//             top += 10;
//             div1.style.top = top + "px";
//         }

//     }, false)
// }