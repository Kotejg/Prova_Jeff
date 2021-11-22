let cpfCliente = document.getElementById('form-cpf-cliente');
let campObriga = document.querySelector('.campo-obrigatorio')

cpfCliente.oninput = function () {
    let regexCpf = /^\d{3}\d{3}\d{3}\d{2}$/;
    let cpfError = document.querySelector(".error-cpf");
    let cpfOK = document.querySelector(".valid-cpf");
    if (regexCpf.test(cpfCliente.value)) {
        cpfOK.style.display = "block";
        cpfError.style.display = "none"; 
        campObriga.style.display = "none"
    } else {
        cpfOK.style.display = "none";
        cpfError.style.display = "block";
        campObriga.style.display = "none"
    }
}

let rgCliente = document.getElementById('form-rg');

rgCliente.onblur = function () {
    let regexRg = /^\d{3}\d{3}\d{3}\d{2}$/;
    let rgError = document.querySelector(".error-rg");
    let rgOK = document.querySelector(".valid-rg");
    if (regexRg.test(cpfCliente.value)) {
        rgOK.style.display = "block";
        rgError.style.display = "none";
        campObriga.style.display = "none"
    } else {
        rgOK.style.display = "none";
        rgError.style.display = "block";
        campObriga.style.display = "none"
    }
}


let cepCliente = document.getElementById('form-cep');

cepCliente.oninput = function () {
    let regexCep = /^\d{5}\d{3}$/;
    let cepOk = document.querySelector('.valid-cep');
    let cepError = document.querySelector('.error-cep');
    if (regexCep.test(cepCliente.value)) {
        cepOk.style.display = "block";
        cepError.style.display = "none";
        campObriga.style.display = "none"
    } else {
        cepOk.style.display = "none";
        cepError.style.display = "block";
        campObriga.style.display = "none"

    }
}

let inputEmail = document.getElementById("form-email");

inputEmail.oninput = function () {
    var regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let msgEmailError = document.querySelector(".invalid-email");
    let msgEmailOk = document.querySelector(".valid-email");

    if (regexMail.test(inputEmail.value)) {
        msgEmailError.style.display = "none";
        msgEmailOk.style.display = "block";
        campObriga.style.display = "none"
    } else {
        msgEmailOk.style.display = "none";
        msgEmailError.style.display = "block";
        campObriga.style.display = "none"
    }
}

let password = document.getElementById('form-senha');

password.oninput = function () {
    let passwordOK = document.querySelector('.valid-pass');
    let passwordError = document.querySelector('.error-pass');
    if (password.value.length <= 8) {
        passwordError.style.display = "block";
        passwordOK.style.display = "none";
        campObriga.style.display = "none"
    } else {
        passwordError.style.display = "none";
        passwordOK.style.display = "block";
        campObriga.style.display = "none"
    }
}


let confirmaPassword = document.getElementById('form-senha-confirma');


confirmaPassword.oninput = function () {
    let ConfirmaPasswordOk = document.querySelector('.valid-pass2');
    let ConfirmaPasswordError = document.querySelector('.error-pass2');

    if (password.value == confirmaPassword.value) {
        ConfirmaPasswordOk.style.display = 'block';
        ConfirmaPasswordError.style.display = 'none';
        campObriga.style.display = "none"
    } else {
        ConfirmaPasswordOk.style.display = 'none';
        ConfirmaPasswordError.style.display = 'block';
        campObriga.style.display = "none"
    }
}


let btnCadastrado = document.getElementById('btn-cadastro-ok');
btnCadastrado.addEventListener('click', () => alert('Cadastro Realizado com Sucesso'))

let nome = document.getElementById('form-Nome-cliente');
nome.onchange = function () {
    let regexLetras = /^[a-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÒÖÚÇÑ ]+$/
    let nomeError = document.querySelector('.error-nome'); 
    let nomeOK = document.querySelector('.valid-nome'); 
    if (regexLetras.test(nome.value)){
        nomeOK.style.display = 'block'; 
        nomeError.style.display = 'none';
        campObriga.style.display = "none"
    } else {
        nomeOK.style.display = 'none'; 
        nomeError.style.display = 'block';
        campObriga.style.display = "none"
    }
}