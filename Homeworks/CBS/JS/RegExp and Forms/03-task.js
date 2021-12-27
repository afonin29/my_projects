window.onload = function() {
    init();
    let confirm = document.getElementById("confirm");
    let password = document.getElementById("password");
    
        function init() {
    
            for (let i = 0; i < document.forms.length; i++) {
    
                let form = document.forms[i];
    
                let formValidation = false;
                for (let j = 0; j < form.elements.length; j++) {
                    let e = form.elements[j];
    
                if (e.type != "text" && e.type != "password") {
                        continue;
                    }
                    let pattern = e.getAttribute("data-pattern");
                    if (pattern) {
                        e.onchange = validateInput;
                        formValidation = true;
                    }
                }
                if (formValidation) {
                    form.onsubmit = validateForm;
                }
            }
        }
    
        function validateInput() {
            let pattern = this.dataset.pattern,
                msg = this.dataset.errMsg,
                msgId = this.dataset.msgId,
                value = this.value;
       
            let res = value.search(pattern);
            if (res == -1) {
                document.getElementById(msgId).innerHTML = msg;
                this.className = "error";
            } else {
                document.getElementById(msgId).innerHTML = "";
                this.className = "valid";
            }
        }
    
        confirm.addEventListener("change", function(e) {
            if (confirm.value != password.value) {
                this.className = "error";
                document.getElementById("confirmMsg").innerHTML = "Пароли не совпадают";
            } else {
                document.getElementById("confirmMsg").innerHTML = "";
                this.className = "valid";
            }
        }, false)

        function validateForm() {
            let invalid = false;
            for (let i = 0; i < this.elements.length; ++i) {
                let e = this.elements[i];
                if (e.type == "text" && e.onchange != null) {
                    e.onchange();
                    if (e.className == "error") invalid = true;
                }
            }
            if (invalid) {
                alert("Допущены ошибки при заполнении формы.");
                return false;
            }
        }
    }