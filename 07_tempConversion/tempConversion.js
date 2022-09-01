const ftoc = function(f) {
  var celcius = Math.round(((f - 32) * 5/9) * 10) / 10;
  return celcius;
};

const ctof = function(c) {
  var farenheit = Math.round(((c * 9/5) + 32) * 10) / 10;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
