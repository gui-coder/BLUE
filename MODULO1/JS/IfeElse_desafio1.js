/*DESAFIO 01
Reajuste salarial
As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%
Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento."
 */
var salario;
        var salarioNovo;
        var aumento;

        salario = parseFloat(prompt("Digite o Salário do Colaborador: ") + ".");

        if (salario <= 280) {
            aumento = (salario * 20 / 100);
            salarioNovo = aumento + salario;
            alert("Salário Antes do Reajuste: R$ " + salario.toFixed(2) + ".\n-- Aumento Aplicado 20% ----\nValor do Aumento: R$ " + aumento.toFixed(2) + ".\nSalário Após o Aumento: R$ " + salarioNovo.toFixed(2) + ".");
        }

        else if (salario > 280 && salario <= 700) {
            aumento = (salario * 15 / 100);
            salarioNovo = aumento + salario;
            alert("Salário Antes do Reajuste: R$ " + salario.toFixed(2) + ".\n-- Aumento Aplicado 15% --\nValor do Aumento: R$ " + aumento.toFixed(2) + ".\nSalário Após o Aumento: R$ " + salarioNovo.toFixed(2) + ".");
        }

        else if (salario > 700 && salario <= 1500) {
            aumento = (salario * 10 / 100);
            salarioNovo = aumento + salario;
            alert("Salário Antes do Reajuste: R$ " + salario.toFixed(2) + ".\n-- Aumento Aplicado 10% --\nValor do Aumento: R$ " + aumento.toFixed(2) + ".\nSalário Após o Aumento: R$ " + salarioNovo.toFixed(2) + ".");
        }

        else {
            aumento = (salario * 5 / 100);
            salarioNovo = aumento + salario;
            alert("Salário Antes do Reajuste: R$ " + salario.toFixed(2) + ".\n-- Aumento Aplicado 5% --\nValor do Aumento: R$ " + aumento.toFixed(2) + ".\nSalário Após o Aumento: R$ " + salarioNovo.toFixed(2) + ".");
        }
