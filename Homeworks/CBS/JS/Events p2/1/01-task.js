window.onload = function() {
    let text = document.getElementById("text1");
    let but = document.getElementById("save");
    let textvalue, savedvalue;

    but.addEventListener("click", function(e) {
        savedvalue = text.value;
        console.log(savedvalue)
    }, false)


    window.addEventListener("beforeunload", function(e) {
        if (text.value != savedvalue) {
            console.log("NO")
            let conf = confirm("Данные не сохранены. Вы точно хотите закрыть окно?");
                if (conf == false) {
                    e.returnValue = '';
                }
        }
    },
    false)
}