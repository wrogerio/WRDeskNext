const NumbersTwoDigits = (number) => {
  return number < 10 ? `0${number}` : number;
};

module.exports = {
  NumbersTwoDigits,
};
