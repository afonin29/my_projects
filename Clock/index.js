const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

    let today = new Date();
    let mm = today.getMinutes() * deg;
    let hh = today.getHours() * 30 + mm/12;
    let ss = today.getSeconds() * deg;
            
    hr.style.transform = `rotateZ(${(hh)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

}, 1000)