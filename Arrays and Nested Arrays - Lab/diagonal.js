function solve(matrix) {
    const size = matrix.length - 1;
    let sumOne = 0;
    let sumTwo = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumOne += matrix[i][i];
        sumTwo += matrix[i][size - i];
    }
    console.log(`${sumOne} ${sumTwo}`)
}