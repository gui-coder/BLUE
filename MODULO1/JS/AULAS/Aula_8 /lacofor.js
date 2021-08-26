//
//
console.log("hello world");

let carro = { modelo: "A3 sedan", marca: "Audi", ano: 2022 };

for (let caracteristicas in carro) {
  console.log(caracteristicas + ":" + carro[caracteristicas]);
}
