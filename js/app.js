let inputEmail = document.getElementById("form-email");

inputEmail.oninput = function () {
    var regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let msgEmailError = document.querySelector(".invalid-email");
    let msgEmailOk = document.querySelector(".valid-email");

    if (regexMail.test(inputEmail.value)) {
        msgEmailError.style.display = "none";
        msgEmailOk.style.display = "block";
    } else {
        msgEmailOk.style.display = "none";
        msgEmailError.style.display = "block";
    }
}


let password = document.getElementById('form-senha'); 

password.oninput = function() {
    let passwordOK = document.querySelector('.valid-pass');
    let passwordError = document.querySelector('.error-pass');
    if (password.value.length <= 8) {
        passwordError.style.display = "block";
        passwordOK.style.display = "none";
    } else {
        passwordError.style.display = "none";
        passwordOK.style.display = "block";
    }   
}
