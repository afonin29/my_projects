window.onload = function() {
    let btn = document.getElementById("discount");
    let maxWidth = window.innerWidth - 120;
    let maxHeight = window.innerWidth - 120;
    console.log(maxWidth)

    btn.addEventListener('mouseover', function(e) {
        if (!e) e = window.event;

        let clientX = e.clientX;
        let clientY = e.clientY;

        let offsetX = btn.offsetLeft;
        let offsetY = btn.offsetTop;

        let deltaX = clientX - offsetX;
        let deltaY = clientY - offsetY;

        btn.style.left = (offsetX + deltaX + 30) + "px";
        btn.style.top = (offsetY + deltaY + 30) + "px";
    
    }, false)
}