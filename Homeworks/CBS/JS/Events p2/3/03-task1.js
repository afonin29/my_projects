window.onload = function() {
    let btn = document.getElementById("discount");
    let maxWidth = window.innerWidth - 120;
    let maxHeight = window.innerHeight - 120;
    console.log(maxWidth);
    console.log(maxHeight);

    btn.addEventListener("mouseover", function(e) {
        let left = Math.floor(Math.random() * (maxWidth - 0 + 1)) + 0;
        let top = Math.floor(Math.random() * (maxHeight - 0 + 1)) + 0;
        console.log(left)
        btn.style.left = left + "px";
        btn.style.top = top + "px";
    },false)
}