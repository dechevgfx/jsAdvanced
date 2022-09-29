function attachEventsListeners() {
    let [inputFields, outputFields] =
    document.querySelectorAll('input[type="text"]');

let inputUnits = document.querySelector("#inputUnits");
let outputUnits = document.querySelector("#outputUnits");
let convertBtn = document.getElementById("convert");
convertBtn.addEventListener("click", operation);

function operation() {
    let convert = Number(inputFields.value);
    let result = 0;

    switch (inputUnits.value) {
        case "km":
            convert *= 1000;
            break;
        case "m":
            convert = convert;
            break;
        case "cm":
            convert *= 0.01;
            break;
        case "mm":
            convert *= 0.001;
            break;
        case "mi":
            convert *= 1609.14;
            break;
        case "yrd":
            convert *= 0.9144;
            break;
        case "ft":
            convert *= 0.3048;
            break;
        case "in":
            convert *= 0.0254;
            break;
    }

    switch (outputUnits.value) {
        case "km":
            result = convert / 1000;
            break;
        case "m":
            result = convert = convert;
            break;
        case "cm":
            result = convert / 0.01;
            break;
        case "mm":
            result = convert / 0.001;
            break;
        case "mi":
            result = convert / 1609.14;
            break;
        case "yrd":
            result = convert / 0.9144;
            break;
        case "ft":
            result = convert / 0.3048;
            break;
        case "in":
            result = convert / 0.0254;
            break;
    }
    outputFields.value = result;
}
}