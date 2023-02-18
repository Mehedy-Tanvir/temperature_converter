const celcius = document.querySelector('#celcius');
const fahrenheit = document.querySelector('#fahrenheit');
const kelvin = document.querySelector('#kelvin');

function computeTemp(event) {

    const currentValue = parseInt(event.target.value);
    switch (event.target.name) {
        case "celcius":
            kelvin.value = (currentValue + 273.32).toFixed(2)
            fahrenheit.value = (currentValue * 1.8 + 32).toFixed(2)
            break;
        case "fahrenheit":
            celcius.value = ((currentValue - 32) / 1.8).toFixed(2)
            kelvin.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2)
            break;
        case "kelvin":
            celcius.value = (currentValue - 273.32).toFixed(2)
            fahrenheit.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2)
            break;

        default:
            break;
    }
}