window.addEventListener("keydown",function(e) {
    if (e.ctrlKey == true && e.keyCode == 83 && e.shiftKey == false) {
        alert("Saved");
    } else if (e.ctrlKey == true && e.keyCode == 65 && e.shiftKey == false) {
        alert("Selected all");
    } else if (e.ctrlKey == true && e.keyCode == 83 && e.shiftKey == true) {
        alert("Saved all");
    }
},false)