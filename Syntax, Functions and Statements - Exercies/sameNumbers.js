function solve(number) {
    let strNum = number.toString();
    let result = parseInt(strNum[0]);
    let isSame = true;

    for (let index = 1; index < strNum.length; index++) {
        result += parseInt(strNum[index]);

        if (strNum[index] != strNum[index - 1]) {
            isSame = false;
        }

    }
    console.log(isSame);
    console.log(result);
}