window.onload = function (): void {
    let sizeprice: number, addprice: number, marshprice:number, sum: number, size: string, additions: string, marsh: string;

    let btn: any = document.getElementById("but1");
    let p1: any = document.getElementById("result");
    btn.onclick = function() {
    function getSize():string {
    return prompt("Какой желаете размер мороженого? 1 - большой, 2 - маленький");
    }

    function getAdditions():string {
    return prompt("Что желаете добавить в мороженое? 1 - шоколад, 2 - карамель, 3 - ягоды");
    }

    function getMarshmellow():string {
    return prompt("Желаете добавить маршмеллоу? Если да, то введите 1");
    }
    
    size = getSize();
    additions = getAdditions();
    marsh = getMarshmellow();
    sizePrice();
    addPrice();
    marshPrice();
    sum = getSum();
    p1.innerHTML = "Общая сумма заказа: " + sum;


    function sizePrice():void { 
    if (size == "1") {
        sizeprice = 25;
    } else if (size == "2") {
        sizeprice = 10;
    } else {
        do {
           size = getSize();
        } while (
            (size != "1" && size != "2")
        )
        sizePrice();
        }
    }

    function addPrice():void {
        if (additions == "1") {
            addprice = 5;
        } else if (additions == "2") {
            addprice = 6;
        } else if (additions == "3") {
            addprice = 10;
        } else {
            do {
                additions = getAdditions();
             } while (
                 (additions != "1" && additions != "2" && additions != "3")
             )
             addPrice();
        }
    }

    function marshPrice():void {
        if (marsh == "1") {
            marshprice = 5;
        } else {
            marshprice = 0;
        }
    }


    function getSum():number {
        return sizeprice + addprice + marshprice;
    }
    }
}

    



