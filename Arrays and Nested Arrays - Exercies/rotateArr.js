function rotate(array, rotations) {
    for (let index = 0; index < rotations; index++) {
        array.unshift(array.pop())
    }
    console.log(array.join(" "))
}