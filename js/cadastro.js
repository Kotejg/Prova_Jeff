let cpfCliente = document.getElementById('form-cpf-cliente');

cpfCliente.onblur = function () {
    let regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    let cpfError = document.querySelector(".error-cpf");
    let cpfOK = document.querySelector(".valid-cpf");
    if (regexCpf.test(cpfCliente.value)) {
        cpfOK.style.display = "block";
        cpfError.style.display = "none";
    } else {
        cpfOK.style.display = "none";
        cpfError.style.display = "block";
    }
}

let rgCliente = document.getElementById('form-rg');

rgCliente.onblur = function () {
    let regexRg = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    let rgError = document.querySelector(".error-rg");
    let rgOK = document.querySelector(".valid-rg");
    if (regexRg.test(cpfCliente.value)) {
        rgOK.style.display = "block";
        rgError.style.display = "none";
    } else {
        rgOK.style.display = "none";
        rgError.style.display = "block";
    }
}


let cepCliente = document.getElementById('form-cep');
 let cepOk = document.getElementById('.valid-cep');
    let cepError = document.getElementById('.error-cep');
cepCliente.oninput = function () {
    let regexCep = /^\d{5}-\d{3}$/; 
   
    if (regexCep.test(cepCliente.value)) {
    cepOk.style.display = "block";
    cepError.style.display = "none";
    } else {
    // cepOk.style.display = "none"; 
    // cepError.style.display = "block"; 
    console.log('11')
    }
}







// let password = document.getElementById('form-senha'); 

// password.oninput = function() {
//     console.log(password.lenth);
//     let passwordOK = document.getElementById('.valid-pass');
//     let passwordError = document.getElementById('.error-pass');
//     if (password.lenth <= 8) {
//         passwordError.style.display = "block";
//         passwordOK.style.display = "none";
//     } else {
//         passwordError.style.display = "none";
//         passwordOK.style.display = "block";
//     }   
// }

