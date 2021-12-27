window.onload = function() {
    let par = document.getElementById("par");

    par.addEventListener('copy', function(e) {
        e.preventDefault();
        alert("You cannot copy this text!");
    })
}