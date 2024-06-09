document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botao').addEventListener('click', function(event) {
            // Coleta o peso e a altura inseridos pelo usuário
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var idade = parseFloat(document.getElementById('idade').value);

    // Calcula o IMC
    var imc = peso / (altura * altura);

    // Calcula os preços para a Operadora de Saúde A
    var precoBasicoA = 100 + (idade * 10 * (imc / 10));
    var precoStandardA = (150 + (idade * 15)) * (imc / 10);
    var precoPremiumA = (200 - (imc * 10) + (idade * 20)) * (imc / 10);

    // Determina o fator de comorbidade para a Operadora de Saúde B
    var fatorComorbidade;
    if (imc < 18.5) {
        fatorComorbidade = 10; // Abaixo do peso
    } else if (imc >= 18.5 && imc < 25) {
        fatorComorbidade = 1; // Normal
    } else if (imc >= 25 && imc < 30) {
        fatorComorbidade = 6; // Sobrepeso
    } else if (imc >= 30 && imc < 35) {
        fatorComorbidade = 10; // Obesidade
    } else if (imc >= 35 && imc < 40) {
        fatorComorbidade = 20; // Obesidade mórbida grave
    } else {
        fatorComorbidade = 30; // Obesidade mórbida muito grave
    }

    // Calcula os preços para a Operadora de Saúde B
    var precoBasicoB = 100 + (fatorComorbidade * 10 * (imc / 10));
    var precoStandardB = (150 + (fatorComorbidade * 15)) * (imc / 10);
    var precoPremiumB = (200 - (imc * 10) + (fatorComorbidade * 20)) * (imc / 10);

    // Exibe os resultados em uma tabela ou diretamente no console para depuração
    console.log("Preços da Operadora A: Básico: " + precoBasicoA + ", Standard: " + precoStandardA + ", Premium: " + precoPremiumA);
    console.log("Preços da Operadora B: Básico: " + precoBasicoB + ", Standard: " + precoStandardB + ", Premium: " + precoPremiumB);


    });
});
