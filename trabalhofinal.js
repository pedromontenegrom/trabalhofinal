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

    var precoBasicoAsimplificado = precoBasicoA.toFixed(2);
    var precoStandardAsimplificado = precoStandardA.toFixed(2);
    var precoPremiumAsimplificado = precoPremiumA.toFixed(2);

    var precoBasicoBsimplificado = precoBasicoB.toFixed(2);
    var precoStandardBsimplificado = precoStandardB.toFixed(2);
    var precoPremiumBsimplificado = precoPremiumB.toFixed(2);

    window.scrollTo({top: document.body.scrollHeight, behavior: "smooth" })

    //document.getElementById("precoBasicoA").innerHTML = 'R$ ' + precoBasicoAsimplificado;
    //document.getElementById("precoStandardA").innerHTML = 'R$ ' + precoStandardAsimplificado;
    //document.getElementById("precoPremiumA").innerHTML = 'R$ ' + precoPremiumAsimplificado;

    //document.getElementById("precoBasicoB").innerHTML = 'R$ ' + precoBasicoBsimplificado;
    //document.getElementById("precoStandardB").innerHTML = 'R$ ' + precoStandardBsimplificado;
    //document.getElementById("precoPremiumB").innerHTML = 'R$ ' + precoPremiumBsimplificado;

    document.getElementById("precoBasicoA").innerHTML = precoBasicoA > 0 ? 'R$ ' + precoBasicoAsimplificado : 'Inválido';
    document.getElementById("precoStandardA").innerHTML = precoStandardA > 0 ? 'R$ ' + precoStandardAsimplificado : 'Inválido';
    document.getElementById("precoPremiumA").innerHTML = precoPremiumA > 0 ? 'R$ ' + precoPremiumAsimplificado : 'Inválido';

    document.getElementById("precoBasicoB").innerHTML = precoBasicoB > 0 ? 'R$ ' + precoBasicoBsimplificado : 'Inválido';
    document.getElementById("precoStandardB").innerHTML = precoStandardB > 0 ? 'R$ ' + precoStandardBsimplificado : 'Inválido';
    document.getElementById("precoPremiumB").innerHTML = precoPremiumB > 0 ? 'R$ ' + precoPremiumBsimplificado : 'Inválido';


    var precos = [
        { nome: "Plano Básico Operadora A", valor: precoBasicoA },
        { nome: "Plano Standard Operadora A", valor: precoStandardA },
        { nome: "Plano Premium Operadora A", valor: precoPremiumA },
        { nome: "Plano Básico Operadora B", valor: precoBasicoB },
        { nome: "Plano Standard Operadora B", valor: precoStandardB },
        { nome: "Plano Premium Operadora B", valor: precoPremiumB }
    ].filter(p => p.valor > 0);

    //var planoMaisBarato = precos.reduce((min, p) => p.valor < min.valor ? p : min, precos[0]);

    var planoMaisBarato = precos.reduce((min, p) => p.valor < min.valor && p.valor > 0 ? p : min, precos[0]);

    // Exibe a mensagem com o plano mais barato
    document.getElementById("mensagemPlanoBarato").textContent = "O melhor plano para você é o " + planoMaisBarato.nome + ", custando R$ " + planoMaisBarato.valor.toFixed(2) + ".";

    });
});
