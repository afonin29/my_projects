let module1 = {};


module1.createNewElement() {
    let newP = document.createElement("p");
    newP.innerHTML = "New P";
    myButton = document.getElementById("mybutton");
    document.body.insertBefore(newP, myButton);
}