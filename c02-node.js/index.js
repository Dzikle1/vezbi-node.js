const calkulator = require ("./conversion").calkulator;

const result = calkulator(10, 5, "zbir");
console.log(result);

const result2 = calkulator(10, 5, "odzemanje");
console.log(result2);

const result3 = calkulator(10, 5, "mnozenje");
console.log(result3);

const result4 = calkulator(10, 5, "delenje");
console.log(result4);

const result5 = calkulator(10, null, "convertMilesToKm");
console.log(result5);

const result6 = calkulator(16.0934, null, "convertkmToMiles");
console.log(result6);

const result7 = calkulator(100, null, "convertCelsuisToFahrenheit");
console.log(result7);

const result8 = calkulator(212, null, "convertFahrenheitToCelsuis");
console.log(result8);   