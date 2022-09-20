function solve(numbers) {
    const result = [];
    for (const iterator of numbers) {
        if (iterator < 0) {
            result.unshift(iterator)
        } else {
            result.push(iterator)
        }
    }
    console.log(result.join("\n"))
}