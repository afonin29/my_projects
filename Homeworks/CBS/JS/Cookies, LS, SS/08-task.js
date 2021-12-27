window.onload = function() {
    let output = document.querySelector("div");
    let lastdate = findCookieValue("date");
    console.log(lastdate)
    
    if (lastdate === undefined) {
        output.innerHTML = "Это ваше первое посещение сайта"
    } else {
        output.innerHTML = "Последнее посещение: " + lastdate;
    }

    window.addEventListener("unload", function(e) {
        let now = new Date();

        document.cookie = "date=" + now +";max-age=2592000";
    }, false)

    function findCookieValue(cookieName) {
        let allcookies = document.cookie;
        let pos = allcookies.indexOf(cookieName + "=");
            
        if (pos != -1) {
            let start = pos + cookieName.length + 1;
            let end = allcookies.indexOf(";", start);

            if (end == -1) end = allcookies.length;

            let value = allcookies.substring(start, end);
            value = decodeURIComponent(value);
            return value;
        }
    }
}