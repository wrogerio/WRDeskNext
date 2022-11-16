const NumbersTwoDigits = (number) => {
  return number < 10 && number > 0 ? `0${number}` : number;
};

const maskData = (valor) => {
  valor = valor.replace(/\//g, "");

  if (valor.length == 3) {
    valor = valor.substring(0, 2) + "/" + valor.substring(2, 3);
  } else if (valor.length == 4) {
    valor = valor.substring(0, 2) + "/" + valor.substring(2);
  } else if (valor.length >= 5) {
    valor = valor.substring(0, 2) + "/" + valor.substring(2, 4) + "/" + valor.substring(4);
  }

  return valor;
};

module.exports = {
  NumbersTwoDigits,
  maskData,
};
