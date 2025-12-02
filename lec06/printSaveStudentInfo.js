function proccessInfo(id, name, lastName, address, lang, knowladge) {
    var dbString = stringify((id, name, lastName, address, lang, knowladge);
    localStorage.setItem(id, dbString);
}

function getStudentDB() {
    var students = [];
    for (i=0; i<localStorage.length; i++) {
        var studentId = localStorage.key(i);
        var studentInfo = localStorage.getItem(studentId);
        var tmpStudent = [];
        tmpStudent[0] = studentId;
        tmpStudent[1] = getName(studentInfo);
        tmpStudent[2] = getLastName(studentInfo);
        tmpStudent[3] = getAddr(studentInfo);
        tmpStudent[4] = getLang(studentInfo);
        tmpStudent[5] = getKnowladge(studentInfo);
        student[i] = tmpStudent;
    }
    return students;
}





function stringify(id, name, lastName, address, lang, knowladge) {
    var idStr = 'id: ' + id;
    var nameStr = 'name: ' + name;
    var lastNameStr = 'lastName: ' + lastName;
    var addressStr = 'address: ' + address;
    var langStr = 'lang: ' + lang;
    var knowladgeStr = 'knowladge: ' + knowladge;
    var dbStr = '{' + idStr + ',' + nameStr + ',' + lastNameStr + ',' + addressStr + ',' + langStr + ',' + knowladgeStr;
    return dbStr;
}
