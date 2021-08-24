/*Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
1. "Telefonou para a vítima?"
2. "Esteve no local do crime?"
3. "Mora perto da vítima?"
4. "Devia para a vítima?"
5. "Já trabalhou com a vítima?"
O programa deve no final emitir uma classificação sobre a participação da pessoa no crime.
Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

*/
const prompt = require("prompt-sync")();

let positivo = 0;

let negativo = 0;

console.log(" Digite 1 OU 2 nas questões abaixo ");
console.log(" 1 para SIM e 2 para Não ");
let Pergunta1 = prompt("Você telefonou para a vítima?");
if (Pergunta1 == 1) positivo++;
else negativo++;
let Pergunta2 = prompt("Você esteve no local do crime?");
if (Pergunta2 == 1) positivo++;
else negativo++;
let Pergunta3 = prompt("Você mora perto da vítima?");
if (Pergunta3 == 1) positivo++;
else negativo++;
let Pergunta4 = prompt("Você devia para a vítima?");
if (Pergunta4 == 1) positivo++;
else negativo++;
let Pergunta5 = prompt("Você ja trabalhou com a vítima?");
if (Pergunta5 == 1) positivo++;
else negativo++;

if (positivo == 5) console.log("Voce e declarado culpado de  assasinato");
else if (positivo == 4 || positivo == 3)
  console.log("Voce e declarado cumplice");
else if (positivo == 2)
  console.log("Voce e considerado suspeito de assasinato");
else if (negativo == 5) console.log("Voce e Inocente");
