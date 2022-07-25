function subtract() {
    const firstNum = document.getElementById('firstNumber').value;
    const secondNum = document.getElementById('secondNumber').value;
    let result = Number(firstNum) - Number(secondNum)
    const res = document.getElementById('result');
    res.textContent = result
    console.log(result);
}