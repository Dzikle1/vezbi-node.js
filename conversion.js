const calkulator = (Number1, Number2, operation) => {
    switch (operation) {
        case "zbir":
            return Number1 + Number2;
        case "odzemanje":
            return Number1 - Number2;
        case "mnozenje":
            return Number1 * Number2;
        case "delenje":
            return Number1 / Number2;
        case "convertMilesToKm":
            return Number1 * 1.60934;
        case "convertkmToMiles":
            return Number1 / 1.60934;
        case "convertCelsuisToFahrenheit":
            return Number1 * 1.8 + 32;
        case "convertFahrenheitToCelsuis":
            return (Number1 - 32) / 1.8;
        case convertPoundsToKilograms:
            return Number1 * 0.453592;
        case convertKilogramsToPounds:
            return Number1 / 0.453592;
        case convertFeetToMetres:
            return Number1 * 0.3048;
        case convertMetresToFeet:
            return Number1 / 0.3048;
        default:
            return "Nepoznata operacija";
    }

}
module.exports = { calkulator };