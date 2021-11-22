let cpfCliente = document.getElementById('form-cpf-cliente');

cpfCliente.onblur = function () {
    let regexCpf = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    let cpfError = document.querySelector(".error-cpf");
    let cpfOK = document.querySelector(".valid-cpf"); 
    if (regexCpf.test(cpfCliente.value)){
        cpfOK.style.display = "block";
        cpfError.style.display = "none";
    } else {
        cpfOK.style.display = "none";
        cpfError.style.display = "block";
    }
}
