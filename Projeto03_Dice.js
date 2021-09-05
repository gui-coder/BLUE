/*
Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.

O programa tem que:

• Perguntar quantas rodadas você quer fazer; (1,0 ponto)
• Perguntar quantos jogadores vão jogar; (1,5 pontos)
• Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
• Guarda todos os objetos em uma lista; (2,0 pontos)
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado. (2,0 pontos)
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande
campeão. (2,0 pontos)
*/
const prompt = require("prompt-sync")();

var lista = [];

let qtdRodadas = +prompt("Quantas rodadas você quer fazer? ");

let qtdPlayers = +prompt("quantos jogadores vão jogar? ");

for (let i = 0; i < qtdPlayers; i++) {
  const rndInt = Math.floor(Math.random() * 6) + 1;

  var nome = prompt("Qual o nome dos jogadores ? ");

  let jogador = {
    nome: nome,
    dado: rndInt,
  };
  lista.push(jogador);

  lista.sort((a, b) => {
    if (b.dado < a.dado) {
      return -1;
    } else {
      return true;
    }
  });
}
console.log(lista);
