function visitLink(path) {
	let currentValue = localStorage.getItem(path) ? parseInt(localStorage.getItem(path), 10) : 0;
	let newValue = currentValue + 1;
	localStorage.setItem(path, newValue)
}

function viewResults() {
	let page1_qty = localStorage.getItem('Page1') === null ? 0 : localStorage.getItem('Page1');
	let page2_qty = localStorage.getItem('Page2') === null ? 0 : localStorage.getItem('Page2');
	let page3_qty = localStorage.getItem('Page3') === null ? 0 : localStorage.getItem('Page3');
	
	if (document.querySelector('span')) {
		let spanElement = document.querySelector('span')
		spanElement.innerHTML = `<ul><li>You visited Page1 ${page1_qty} time(s)</li><li>You visited Page2
		${page2_qty} time(s)</li><li>You visited Page3 ${page3_qty} time(s)</li></ul>`
	} else {
		let lastElement = document.querySelector('#content')
		let newDiv = document.createElement('span')
		newDiv.innerHTML = `<ul><li>You visited Page1 ${page1_qty} time(s)</li><li>You visited Page2
		${page2_qty} time(s)</li><li>You visited Page3 ${page3_qty} time(s)</li></ul>`
		lastElement.appendChild(newDiv)
	}
	
	localStorage.setItem('Page1', 0);
	localStorage.setItem('Page2', 0);
	localStorage.setItem('Page3', 0);
}
