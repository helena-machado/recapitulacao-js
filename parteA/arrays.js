//A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array
let numbers = [4, 9, 16, 25];

const raizQuadrada = numbers.map((numero) => Math.sqrt(numero));
console.log(raizQuadrada);

//A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.

let numeros = [65, 44, 12, 4];

const multiplica = numeros.map((numero) => numero * 10);

console.log(multiplica);

//A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter
let ages = [32, 33, 16, 40];

const maiorDeIdade = ages.filter((idade) => idade >= 18);

console.log(maiorDeIdade);

//A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter
data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },

  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
];

const retornaDog = data.filter((pet) => pet.type.includes("dog"));

console.log(retornaDog);

//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​

const somaIdadeDogs = retornaDog
  .map((pet) => parseInt(pet.age))
  .reduce((acc, cur) => acc + cur);

console.log(somaIdadeDogs);
