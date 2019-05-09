//Form Validation		
function formValidation() {

	// Make quick references to our fields
	var name = document.getElementById("name");
	var email = document.getElementById("email");
	var msg = document.getElementById("msg");


	//  to check empty form fields.
	if(name.value.length == 0) {
		document.getElementById("formHead").innerText = "*All fields are mandatory";
		name.focus();
		return false;
	}


	// Check each input in the order that it appears in the form!
	if(inputAlphabet(name, "*For your name please use alphabets only")) {

		if(emailValidation(email, "*Please enter a valid email address")) {

			if(lengthDefine(msg, 20, 100)) {

				return true;

			}

		}

	}

	return false;

}


function inputAlphabet(inputtext, alertmsg) {
	var alphaExm = /^[a-zA-Z  ]+$/;
	if(inputtext.value.match(alphaExm)) {
		return true;
	} else {
		document.getElementById("form_p1").innerText = alertmsg;
		inputtext.focus();
		return false;
	}
}


function emailValidation(inputtext, alertmsg) {
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
	if(inputtext.value.match(emailExp)) {
		return true;
	} else {
		document.getElementById("form_p2").innerText = alertmsg;
		inputtext.focus();
		return false;
	}
}


function lengthDefine(inputtext, min, max) {
	var ipComment = inputtext.value;
	if(ipComment.length >= min && ipComment.length <= max) {
		return true;
	} else {
		document.getElementById("form_p3").innerText = 
		"*Please enter between " +min+ " and " +max+ " characters";
		inputtext.focus();
		return false;
	}
}