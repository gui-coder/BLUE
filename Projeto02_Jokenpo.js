/*
O programa tem que:

Permitir
que eu decida quantas rodadas iremos fazer;
Ler a
minha escolha (Pedra, papel ou tesoura);
Decidir
de forma aleatória a decisão do computador;
Mostrar
quantas rodadas cada jogador ganhou;
Determinar
quem foi o grande campeão de acordo com a quantidade de vitórias de cada
um (computador e jogador);
Perguntar
se o Jogador quer jogar novamente, se sim inicie volte a escolha de
quantidade de rodadas, se não finalize o programa.*/

//declarando as variaveis vazias

const prompt = require("prompt-sync")();

let rodadas = 0;
let mao = ["pedra", "papel", "tesoura"];
const mao1 = ["pedra", "papel", "tesoura"];
let userwin = 0;
let pcwin = 0;
//=================================================
// funcao para escolher quantidade de rodadas

function quantrodadas() {
  console.log(" ");
  rodadas = parseInt(prompt(" Quantas rodadas quer jogar:"));
}

// função para  retornar a opcao escolhida pelo usuaro

function maos() {
  console.log(" ");
  console.log("================================================");
  console.log(" Escolha entre 1 = Pedra, 2 = Papel, 3 Tesoura ");
  mao = parseInt(prompt("Digite Sua Escolha: "));
}
//=================================================

// funcao de randomizar a escolha do PC

let escolhas1 = Math.floor(Math.random() * mao1.length);

//=================================================

// escolhe quantas rodadadas quer jogar
console.log("====================JOKENPO=====================");
rodadas = parseInt(prompt(" Quantas rodadas quer jogar:"));

if (rodadas <= 0) {
  console.log(" ");
  console.log(" A opção digitada e invalida por favor digite novamente");
  quantrodadas();
  console.log("================================================");
}

console.log("================================================");
console.log(" ");
console.log(" Escolha entre 1 = Pedra, 2 = Papel, 3 Tesoura ");
mao = parseInt(prompt("Digite Sua Escolha: "));

if (mao1 <= 0 || mao1 > 3) {
  console.log(" ");
  console.log(" A opção digitada e invalida por favor digite novamente");
  maos();
}

/*
if (.indexof == 1) console.log("Você escolheu " + mao1);
else if (mao == 2) console.log("Você escolheu " + mao1);
else if (mao == 3) console.log("Você escolheu " + mao1);
*/

console.log("Pc escolheu: " + mao1[escolhas1]);
if (escolhas1[0] == mao[0]) console.log("Empate ");
else if (escolhas1[1]) console.log(mao1[escolhas1]);
