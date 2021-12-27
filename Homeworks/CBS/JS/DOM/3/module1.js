var elems = {};

elems.getByClass = function(classname) {
    this.classname = classname;
    var elemArray = [];
	var elemList = document.body.childNodes;
    for (let i = 0; i < elemList.length; i++) {
        let elemClass = elemList[i].className;
        if (elemClass == this.classname) {
            elemArray.push(elemList[i]);
        }
    }
    console.log(elemArray);
}

elems.getByClass("redButton")