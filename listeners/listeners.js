const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector("#input2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector('#pResult');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    event.preventDefault();
    const input1int = parseInt(input1.value);
    const input2int = parseInt(input2.value);
    const sumInputs =  input1int + input2int;
    pResult.innerText = 'Resultado: ' + sumInputs;
}