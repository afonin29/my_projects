window.onload = function () {
    let form1 = document.forms[0];
    let form2 = document.forms[1];
    let totalSum = document.getElementById("cost");
    let btnRes = document.getElementById("reset");
    let btnSubmit = document.getElementById("submit");
    let rad = form1.elements.radio1;
    form1.phone.onchange = phoneChange;
    form1.address.onchange = addressChange;
    
    
    
    form1.addEventListener("click", function(e) {
        let pizzaCost = 0;
        for (i=0; i < form1.length; i++) {
            if (form1.elements[i].checked) {
                pizzaCost += Number(form1.elements[i].value);
            }
        }
        totalSum.innerHTML = "Общая сумма заказа: " + pizzaCost + " грн";
    }, false)

    btnRes.addEventListener("click", function(e) {
        for (i=0; i < form1.length; i++) {
            form1.elements[i].checked = false;
        }
    }, false)

    function validate(elem, pattern) {
        let res = elem.value.search(pattern);
        if (res == -1) {elem.className = "invalid";}  // установка CSS класса 
        else {elem.className = "valid";}
    
    }

    function phoneChange() {
        pattern = /\+380\d{9}/;
        validate(this, pattern)
    }

    function addressChange() {
        pattern = /\S\d/;
        validate(this, pattern)
    }


    btnSubmit.addEventListener("click", function(e) {
        let invalid = false;
        let invalid1 = true;
        for (i=0; i < form1.length; i++) {
            let elem = form1.elements[i];
            if (elem.type == "text") {
                if (elem.className == "invalid") {
                    invalid = true;
                }
            }                
        }

        for (i=0; i < rad.length; i++) {
            let elem = rad[i];
            if (elem.checked) {
                invalid1 = false;
                elem.className = "invalid";
            }
        }
        

        if (invalid) {
            alert("Не все поля корректно заполнены");
            e.preventDefault();
        }

        if (invalid1) {
            alert("Выберите размер пиццы");
            e.preventDefault();
        }
    }, false)


}