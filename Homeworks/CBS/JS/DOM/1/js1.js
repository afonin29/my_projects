let js1 = {};

js1.name = "PARAGRAPH";

js1.toParagraph = function() {
    let paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = js1.name;
    }
}