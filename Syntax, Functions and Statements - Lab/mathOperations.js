function math(numF, numS, operator) {
    switch (operator) {
        case "+":
            console.log(numF + numS);
            break;
        case "-":
            console.log(numF - numS);
            break;
        case "*":
            console.log(numF * numS);
            break;
        case "/":
            console.log(numF / numS);
            break;
        case "%":
            console.log(numF % numS);
            break;
        case "**":
            console.log(numF ** numS);
            break;
        default:
            break;
    }
}
// +, -, *, /, %, **.
