const lista1 = [];

const agregarNumeros = () => {
    const numeroNuevoInput = document.getElementById("inputNumbers");
    const listForm = document.getElementById("listForm");
    const numeroNuevoValue = parseInt(numeroNuevoInput.value);
    const listP = document.getElementById("listP");

    lista1.push(numeroNuevoValue);
    listP.innerText = "Tu lista: " + lista1;
    listForm.reset();
}


const calcularMediaAritmeica = () => {
    // let sumaLista1 = 0;
    // for (let i = 0; i < lista1.length; i++) {
    //     sumaLista1 = sumaLista1 + lista1[i];
    // }

    const sumaLista1 = lista1.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedioP = document.getElementById("promedioP");

    const promedioLista = sumaLista1 / lista1.length;

    promedioP.innerText = "Promedio: " + promedioLista
    
    return promedioLista;
}