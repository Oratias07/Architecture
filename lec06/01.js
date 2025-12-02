
function generateText(){
	var name = document.getElementById('fname').value;
	var lastName = document.getElementById('lname').value;
	var msg = document.getElementById('msg').value;
	var lang = document.getElementById('lang').value;
	var education = document.getElementsByName('edu');
	var edu = [];
	for(i=0; i<education.length; i++) {
		if(education[i].checked)
			edu.push(education[i].value);
	}
	var experience = document.getElementsByName('exp');
	var exp = '';
	for(i=0; i<experience.length; i++) {
		if(experience[i].checked){
			exp=experience[i].value;
			break;
		}
	}
	var alertMsg = "";
	if(name == '') {
		alertMsg = alertMsg + "Please enter your name.";
	}
	if(lastName == '') {
		alertMsg = alertMsg + "\nPlease enter your last name.";
	}
	if(msg == '') {
		alertMsg = alertMsg + "\nPlease enter your message.";
	}
	if (exp=='') {
		alertMsg = alertMsg + "\nPlease enter your experience.";
	}
	if (edu.length == 0) {
		alertMsg = alertMsg + "\nPlease enter your education.";
	}
	if(alertMsg == '') {
		var textForDisplay = "Hello " + name + ' ' + lastName + "!</br>Your message is: </br>" + msg + ". </br>";
		textForDisplay = textForDisplay + "It is important to know " + lang + " and you have " + exp +" experience with it. </br>";
		textForDisplay = textForDisplay + "You are an educated person, having ";
		for (i=0; i<edu.length; i++){
			textForDisplay  = textForDisplay+edu[i]+",";
		}
		document.getElementById('res').innerHTML = textForDisplay;
		
	}
	else {
		document.getElementById('res').innerHTML = '';
		alert (alertMsg);
	}
}