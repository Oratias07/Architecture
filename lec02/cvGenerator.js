function cvCheck() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var msg = document.getElementById('textbox').value;
    var checkbox = document.getElementByName('education');
    var radios = document.getElementByName('years');
    var lang = document.getElementById('lang').value;
    var edu = [];
    var exp = '';
    var flag = 1;

    if(fname === ""){
        alert('Error: First name field is missing');
        flag = 0;
    }
    if(lname === ""){
        alert('Error: Last name field is missing');
        flag = 0;
    }
    if(msg === ""){
        alert('Error: messege box field is missing');
        flag = 0;
    }

    for(i=0; i<checkbox.length; i++){
        if(checkbox[i].checked)
            edu.push(checkbox[i].value);
    }
    if(edu == []){
        alert('Error: Education field is missing');
        flag = 0;
    }

    for(i=0; i<radios.length; i++) {
        if(radios[i].checked) {
            exp = radios[i].value;
            break;
        }
    }
    if(exp == ''){
        alert('Error: Experience field is missing');
        flag = 0;
    }
    if(lang === ""){
       alert('Error: langugue field is missing'); 
       flag = 0;
    }

    if(flag == 1){
        //להדפיס למסך את הנתונים
    }

}