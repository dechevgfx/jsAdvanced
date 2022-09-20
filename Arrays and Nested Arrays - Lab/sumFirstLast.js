function sumFandL(numbers) {
    let array = numbers.slice()
    let result = Number(array[0]) + Number(array[array.length - 1])
    console.log(result)
}
sumFandL([10, 20, 30, 40, 50])