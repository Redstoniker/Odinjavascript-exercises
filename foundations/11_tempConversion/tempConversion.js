const convertToCelsius = function(temperatureFahrenheit) {
  let temperatureCelsius = (temperatureFahrenheit-32)*5/9;
  temperatureCelsius = Math.round(temperatureCelsius*10)/10;
  return(temperatureCelsius);
};

const convertToFahrenheit = function(temperatureCelsius) {
  let temperatureFahrenheit = (temperatureCelsius*9/5 +32);
  temperatureFahrenheit = Math.round(temperatureFahrenheit*10)/10;
  return temperatureFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
