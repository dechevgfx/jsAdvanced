function biggestHalf(elements) {
    let con = Array.prototype.concat(...elements)
    let sorted = con.sort((a, b) => a-b)
    let secondArrLen = Math.ceil(elements.length / 2)
    let secondArr = sorted.slice(-secondArrLen)
    return secondArr
}
biggestHalf([2,34,45,7,5,2,4,675,5,34,45])