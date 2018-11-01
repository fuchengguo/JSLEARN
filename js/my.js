function _$(el) {
	if(el.indexOf('#') === 0) {
		return document.getElementById(el.split('#')[1])		
	} else if(el.indexOf('.') === 0) {
		return document.getElementsByClassName(el.split('.')[1])[0]
	} else {
		console.log('error')
		return 
	}
}
