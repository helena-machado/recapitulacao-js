//Utilizando um operador clone o objeto c​lothes
const clothes = {
  pants: { colors: ["black", "blue"] },
  shirts: { colors: ["white", "red"] },
  socks: { colors: ["beige", "gray"] },
};

//Novamente utilizando um operador, clone o objeto c​lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ants, shirts ​e​ socks

const newClothes = { ...clothes };

newClothes["shoes"] = { colors: ["yellow", "purple"] };

console.log(clothes);
console.log(newClothes);
