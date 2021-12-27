(function() {
    let paragraphs = document.getElementsByTagName("p");
    a = paragraphs.length;
    alert(a)

    // zero elements in paragraphs??
    for (let i = 0; i < paragraphs.length; i++) {
        a = paragraphs[i].innerHTML;
    }
    alert("Hello")
})();