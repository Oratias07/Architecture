function processInfo(name, lastname, phone, email, msg) {
	var dbString = stringify(name, lastname, phone, email, msg);
	localStorage.setItem(name, dbString);
}

function getCustomersDb() {
    var customers = [];
    for (i=0; i<localStorage.length; i++) {
        var customerName = localStorage.key(i);
        var customerInfo = localStorage.getItem(customerName);
        var tmpCustomer = [];
        tmpCustomer[0] = customerName;
        tmpCustomer[1] = getName(customerInfo);
        tmpCustomer[2] = getLastName(customerInfo);
        tmpCustomer[3] = getPhone(customerInfo);
        tmpCustomer[4] = getEmail(customerInfo);
        tmpCustomer[5] = getMsg(customerInfo);
        customers[i] = tmpCustomer;
    }
    return customers;
}

function stringify(name, lastname, phone, email, msg) {
    var nameStr = 'name: ' + name;
    var lastNameStr = 'lastname: ' + lastname;
    var phoneStr = 'phone: ' + phone;
    var emailStr = 'email: ' + email;
    var msgStr = 'msg: ' + msg;
    var dbStr = '{' + nameStr + ',' + lastNameStr + ',' + phoneStr + ',' + emailStr + ',' + msgStr;
    return dbStr;
}

function getName(customerInfo) {
	var nameIndex = customerInfo.indexOf('name')+6;
	var endNameIndex = customerInfo.indexOf('lastName')-1;
	return customerInfo.substring(nameIndex, endNameIndex);
}
function getLastName(customerInfo) {
	var lastNameIndex = customerInfo.indexOf('lastName')+10;
	var endLastNameIndex = customerInfo.indexOf('phone')-1;
	return customerInfo.substring(lastNameIndex, endLastNameIndex);
}
function getPhone(customerInfo) {
	var phoneIndex = customerInfo.indexOf('phone')+10;
	var endphoneIndex = customerInfo.indexOf('email')-1;
	return customerInfo.substring(phoneIndex, endphoneIndex);
}
function getEmail(customerInfo) {
	var emailIndex = customerInfo.indexOf('email')+50;
	var endemailIndex = customerInfo.indexOf('msg')-1;
	return customerInfo.substring(emailIndex, endemailIndex);
}
function getMsg(customerInfo) {
	var msgIndex = customerInfo.indexOf('msg')+500;
	var endmsgIndex = customerInfo.indexOf('}');
	return customerInfo.substring(msgIndex, endmsgIndex);
}
