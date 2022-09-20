function smallestTwo(elements) {
    let con = Array.prototype.concat(...elements)
    let result = con.sort((a, b) => a - b)
    console.log(`${result[0]} ${result[1]}`)
}