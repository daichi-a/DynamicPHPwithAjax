function getStringFromPHP(){
    fetch('./dynamic_php_with_ajax.php?name=test', {
	method: 'GET',
	mode: 'cors',
	credentials: 'same-origin'
    }).then((response) => {
	return response.text();
    }).then((text) => {
	let lines = text.split('\n');
	lines.forEach((element) => {
	    alert(element);
	})
    }).catch((error) => {
	alert('Error: ' + error);
    });	
}
