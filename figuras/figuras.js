// Codigo del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Codigo del Triangulo

console.group("Triangulos");

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;


 const areaTriangulo = (base, altura) => (base * altura) / 2;

 console.groupEnd();

//  Codigo Circulo 

console.group("Circulo");

const diametroCirculo = (radio) => radio * 2;
// PI
const pi = Math.PI;
console.log("PI es " + pi);
// Circunferencia
const perimetroCirculo = (radio) => (diametroCirculo(radio)) * pi;
// Area
const areaCirculo = (radio) => (radio * radio) * pi;

console.groupEnd();

// HTML INTERACCION

// CUADRADOS

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("EL perimetro es de " + perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El area es de " + area);
}

// TRIANGULOS

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTrianguloLado1").value;
    const input2 = document.getElementById("inputTrianguloLado2").value;
    const base = document.getElementById("inputTrianguloBase").value;
    
    const lado1 = parseInt(input1);
    const lado2 = parseInt(input2);
    const ladoBase = parseInt(base);

    const perimetro = perimetroTriangulo(lado1, lado2, ladoBase);
    alert("El perimetro es de " + perimetro);
}

function calcularAlturaTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1").value;
    const input2 = document.getElementById("inputTrianguloLado2").value;
    const base = document.getElementById("inputTrianguloBase").value;
    
    const lado1 = parseInt(input1);
    const lado2 = parseInt(input2);
    const ladoBase = parseInt(base);

    if (lado1 === lado2 && lado1 != ladoBase){
        const altura = Math.sqrt(lado1**2 - (ladoBase**2 / 4));
        alert("La altura del triangulo Isóceles es de " + altura);
    }
    else {
        alert("Por favor escriba las dimensiones de un triangulo ISÓSCELES  ambos lados deben de ser iguales pero la base debe de ser diferente a ellos")
    }

    return altura;
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputTrianguloLado1").value;
    const input2 = document.getElementById("inputTrianguloLado2").value;
    const base = document.getElementById("inputTrianguloBase").value;
    
    const lado1 = parseInt(input1);
    const lado2 = parseInt(input2);
    const ladoBase = parseInt(base);

    const altura = Math.sqrt(lado1**2 - (ladoBase**2 / 4));

    const areaTrianguloI = areaTriangulo(ladoBase, altura);
    alert("El area de tu triangulo es de " + areaTrianguloI);
}

// CIRCULOS

function calcularCircunferencia(){
    const inputRadio = document.getElementById("inputRadioCirculo");
    const radioData = inputRadio.value;
    const radio = parseInt(radioData);

    const circunferencia = perimetroCirculo(radio);
    alert("La circunferencia de tu circulo es de " + circunferencia);
}

function calcularAreaCirculo(){
    const inputRadio = document.getElementById("inputRadioCirculo");
    const radioData = inputRadio.value;
    const radio = parseInt(radioData);
    const diametro = diametroCirculo(radio);

    const area = areaCirculo(radio);
    alert("El area de tu Circulo es de " + area);
}


