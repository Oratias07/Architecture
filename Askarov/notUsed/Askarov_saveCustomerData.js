function verifyInput() {
    var name = document.getElementById('firstName').value;
    var lastname = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var msg = '';
    for (i=0; i<message.length; i++) {
        if(message[i].checked) {
            msg=message[i].value;
			break;
		}
	}
	var alertMsg = "";
	if((trim(name) == '') || (trim(lastname) == '')) {
		alertMsg = alertMsg + "Please enter a right first name and a right last name.";
	}
	if(trim(phone).length != 10) {
		alertMsg = alertMsg + "\nPlease enter phone with 10 digits.";
	}    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alertMsg = alertMsg + "\nPlease enter a right email.";
    }
	if(alertMsg != '') {
		alert(alertMsg);
	}
	else {
		var fullname = name + " " + lastname;
		var info = fullname + " with phone: " + phone + " with eMail: " + email;
		document.getElementById('res').innerHTML = info + ". The leaving message " + msg;
		processInfo(name, lastname, phone, email, msg);
	}
}

// remove spaces before and after str
function trim (str){
     return str.replace (/^\s+|\s+$/g, '');
}

function clearForm() {
    document.getElementById('firstName').value = 'First name';
    document.getElementById('lastName').value = 'Last name';
    document.getElementById('phone').value = '05x-xxxxxxx';
    document.getElementById('email').value = 'xxxxx@yyyyy.zzzz';
    document.getElementById('message').value = 'Leave yor message here...';
    document.getElementById('res').innerHTML = '';
}

// function getAllStudent(){
// 	var studentTable = getStudentsDb(); // get...DB
// 	var textPrint = '';
// 	for(i=0; i<studentTable.length; i++){
// 		var student = studentTable[i];
// 		var fullName = student[1] + ' ' + student[2];
// 		textPrint += 'id: ' + student[0] + ', named ' + fullName;
// 		textPrint += ' has a ' + student[5] + ' experience in ' + student[4];
// 		textPrint += '. The living address is ' + student[3];
// 		textPrint += '</br>';
// 	}
// 	document.getElementById('res').innerHTML = textPrint;
// }

function removeItem() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}

// whats that??>>>
// function removeIdFunc() {
// 	var id = document.getElementById('removeId').value;
// 	removeIdFromDb(id);
// }