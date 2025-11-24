function colorChange() {
	var currentColor = document.getElementById('h3').innerHTML;
	if(currentColor == 'Black') {
		document.getElementById('HelloWorld').src = "colorYellow.jpg";
		document.getElementById('h3').innerHTML= 'Yellow';
		document.getElementById('h3').style.color = 'yellow';
	}
	else if(currentColor == 'Yellow') {
		document.getElementById('HelloWorld').src = "colorRed.jpg";
		document.getElementById('h3').innerHTML = 'Red';
		document.getElementById('h3').style.color = 'red';
	}
	else if(currentColor == 'Red') {
		document.getElementById('HelloWorld').src = "colorGreen.jpg";
		document.getElementById('h3').innerHTML = 'Green';
		document.getElementById('h3').style.color = 'green';
	}
	else if(currentColor == 'Green') {
		document.getElementById('HelloWorld').src = "colorBlack.jpg";
		document.getElementById('h3').innerHTML = 'Black';
		document.getElementById('h3').style.color = 'black';
	}
}
