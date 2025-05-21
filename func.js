function calcularIMC(){
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var nome =  parseFloat(document.getElementById("nome").value);
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }
    
   const imc = peso / (altura * altura);
    
   let resultado = '';

    if (imc < 18.5) {
        resultado = "Classificação: Abaixo do peso";
    } else if (imc <= 24.9 && imc >= 18.5) {
        resultado = "Classificação: Peso normal";
    } else if (imc < 29.9 && imc >= 25) {
        resultado = "Classificação: Sobrepeso";
    } else {
        resultado= "Classificação: Obesidade";
    }

    document.getElementById("saida").innerText =  `IMC:${imc.toFixed(2)} - ${resultado}`;
}