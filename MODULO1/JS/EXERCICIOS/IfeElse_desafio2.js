/*DESAFIO 02
Jogo da adivinhação
Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/


num1 = Math.floor(Math.random() * 11);

num2 = parseInt(prompt("Digite o Numero:"));

    if (num1 == num2)
        console.log("O Numero ",+ num2 + "E igual a " +num1);
        
        else if (num1 != num2)
            console.log("ixi o numero"+ num2 +" nao era igual ao "+ num1  );