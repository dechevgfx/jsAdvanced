function odd(numbers) {
    let oddNums = numbers.filter((v, i) => i % 2 == 1);
    let double = oddNums.map(x => x * 2);
    let reversed = double.reverse()
    console.log(reversed);
}