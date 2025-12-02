
function verifyInput() {
    var id = document.getElementById('id').value;
    var name = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var adrress = document.getElementById('address').value;
    var lang = document.getElementById('lang').value;
    var knowladge = document.getElementById('knowladge').value;
    var know = '';
    for (i=0; i<knowladge.length; i++) {
        if(knowladge[i].checked) {
            know=knowladge[i].value;
            break;
        }
    }
    var alertMsg = "";
    if((trim(name)))
}

function clearForm() {
    document.getElementById('id').value = '';
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('address').value = 'unknown';
    document.getElementById('lang').value = 'js';
    document.getElementById('res').innerHTML = '';
}
function getAllStudents() {
    var = studentTable = getStudentDB();
    var textPrint = '';
    for (i=0; i<studentTable.length; i++) {
        var student = studentTable[i];
        var fullName = student[1] + ' ' + student[2];
        textPrint += 'id: ' + student[0] + ', named ' + fullName;
        textPrint += 'has a: ' + student[5] + ', experience in ' + student[4];
        textPrint += '. The living address is: ' + student[3];
        textPrint += <br></br>;
        
    }
}

function removeItem() {
    document.getElementById('id').value = '';
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('address').value = '';
    document.getElementById('lang').value = '';
    document.getElementById('knowladge').value = '';
}
function trim(str) {
    return str.replace (/^\s+|)
}
