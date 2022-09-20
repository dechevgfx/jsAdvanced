function sorting(array) {
    array = array.sort((a, b) => {
        return a-b;
    })
    let result = []
    while (array.length != 0) {
        result.push(array.shift(), array.pop())
    }
    return result;
}