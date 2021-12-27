window.onload = function () {
    let c1 = document.getElementById("c1");
    let c2 = document.getElementById("c2");
    let btn1 = document.getElementById("b1");

    btn1.onclick = function () {
        let xhr = new XMLHttpRequest;
        xhr.open("GET", "test2.html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let obj = JSON.parse(xhr.responseText);
                for (i = 0; i < obj.length; i++) {
                    c1.innerHTML += "Студента зовут " + obj[i].name + " " + obj[i].surname + ", возраст: " + obj[i].age + ", на данный момент его профессия " + obj[i].profession +"<br>"
                }
            }
        }
        xhr.send();

        let xhr1 = new XMLHttpRequest;
        xhr1.open("GET", "test1.html", true);
        xhr1.onreadystatechange = function () {
            if (xhr1.readyState == 4 && xhr1.status == 200) {
                let obj = JSON.parse(xhr1.responseText);
                for (i = 0; i < obj.length; i++) {
                    c2.innerHTML += "Студента зовут " + obj[i].name + " " + obj[i].surname + ", возраст: " + obj[i].age + ", на данный момент его профессия " + obj[i].profession +"<br>"
                }
            }
        }
        xhr1.send();
    }
}