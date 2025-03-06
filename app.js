//Creo una función para calcular el IMC:
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcular").addEventListener("click", function () {
        let peso = parseFloat(document.getElementById("peso").value);
        let altura = parseFloat(document.getElementById("altura").value);
        let resultadoElemento = document.getElementById("resultado");
        let interpretacionElemento = document.getElementById("interpretacion");

        let imc = peso / (altura * altura);
        resultadoElemento.innerText = `Tu IMC es: ${imc}`;

        let interpretacion = "";
        if (imc < 18.5) {
            interpretacion = "Bajo peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            interpretacion = "Peso normal";
        } else if (imc >= 25 && imc <= 29.9) {
            interpretacion = "Sobrepeso";
        } else {
            interpretacion = "Obesidad";
        }

        interpretacionElemento.innerText = interpretacion;
    });
});
