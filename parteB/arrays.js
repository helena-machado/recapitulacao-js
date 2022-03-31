//Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const removeItem = [arr.shift(), arr2.shift()];

const agrupaItens = [...arr, ...arr2];

console.log(agrupaItens);

//A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.

let persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" },
];

const nomeCompleto = persons.map(
  (pessoa) => `${pessoa.firstname} ${pessoa.lastname}`
);

console.log(nomeCompleto);
