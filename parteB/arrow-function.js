/*Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors

var getShirtsColorsAmount = function (company) {
    colors = company.products.shirts.colors;
    return colors.length;
  }; */

const getShirtsColorsAmount = (company) => {
  const {
    products: {
      shirts: { colors },
    },
  } = colors;
  return colors.length;
};
