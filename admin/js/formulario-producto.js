const formulario = document.getElementById('formulario-producto');
const inputs = document.querySelectorAll('#formulario-producto input');
const selects = document.querySelectorAll('#formulario-producto select');

const expresiones = {
    inputModelo: /^[0-9]{1,6}$/,
    inputProducto: /^.{4,40}$/,
    inputDetalle: /^.{10,100}$/,
    inputPeso: /^[0-9.]{1,6}$/,
    inputMaterial: /^.{1,15}$/,
    inputStock: /^[0-9]{1,6}$/
};

const campos = {
    inputProducto: false,
    inputModelo: false,
    inputDetalle: false,
    inputPeso: false,
    inputMaterial: false,
    inputStock: false
};

const validarCampo = (expresion, input, campo) => {
    const element = document.getElementById(`${campo}`);
    element.classList[expresion.test(input.value) ? 'add' : 'remove']('is-valid');
    element.classList[expresion.test(input.value) ? 'remove' : 'add']('is-invalid');
    campos[campo] = expresion.test(input.value);
};

const validarFormulario = (e) => {
    const { name, value } = e.target;
    switch (name) {
        case "inputProducto":
        case "inputModelo":
        case "inputDetalle":
        case "inputPeso":
        case "inputMaterial":
        case "inputStock":
            validarCampo(expresiones[name], e.target, name);
            break;
        case "inputTalla":
        case "inputImagen":
            const element = document.getElementById(name);
            element.classList[value !== '' ? 'add' : 'remove']('is-valid');
            element.classList[value !== '' ? 'remove' : 'add']('is-invalid');
            break;
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

selects.forEach((select) => {
    console.log(select);
    select.addEventListener('blur', validarFormulario);
});