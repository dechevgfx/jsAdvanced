function biggestEl(elements) {
    let con = Array.prototype.concat(...elements)
    let result = con.sort((a, b) => b - a)
    console.log(result[0])
}
biggestEl([
    [3, 5, 17, 12, 91, 5],
    [-1, 7, 4, 33, 6, 22],
    [1, 8, 99, 3, 10, 43]
])