let inputCrmMedico = document.getElementById("crmMedico");
let inputQtdCaixas = document.getElementById("qtdCaixas");
let inputCPFCliente = document.getElementById("cpfPaciente");




inputCrmMedico.addEventListener('keyup', (event) => {
    if (isNaN(inputCrmMedico.value) || inputCrmMedico.value.length > 6) {
        inputCrmMedico.value = inputCrmMedico.value.substring(0, (inputCrmMedico.value.length - 1));
    }
    if (inputCrmMedico.value.length > 6) {
        inputCrmMedico.value = inputCrmMedico.value.substring(0, 6);
    }
});

inputQtdCaixas.addEventListener('keyup', (event) => {
    if (isNaN(inputQtdCaixas.value) || inputQtdCaixas.value.length > 3) {
        inputQtdCaixas.value = inputQtdCaixas.value.substring(0, (inputQtdCaixas.value.length - 1));
    }
    if (inputQtdCaixas.value.length > 3) {
        inputQtdCaixas.value = inputQtdCaixas.value.substring(0, 3);
    }
});

inputCPFCliente.addEventListener('keyup', (event) => {
    if (isNaN(inputCPFCliente.value) || inputCPFCliente.value.length > 11) {
        inputCPFCliente.value = inputCPFCliente.value.substring(0, (inputCPFCliente.value.length - 1));
    }
    if (inputCPFCliente.value.length > 11) {
        inputCPFCliente.value = inputCPFCliente.value.substring(0, 11);
    }
});