function solve(arrays) {
    let counter = 0;
    for (let i = 0; i < arrays.length - 1; i++) {
        for (let j = 1; j < arrays[i].length; j++) {
            if (arrays[i][j] == arrays[i + 1][j]) {
                counter++;
            }
            if (arrays[i][j] == arrays[i][j - 1]) {
                counter++;
            }
        }
    }
    for (let i = 0; i < arrays[arrays.length - 1].length; i++) {
        if (arrays[arrays.length - 1][i] == arrays[arrays.length - 1][i + 1]) {
            counter++;
        }
    }
    for (let index = 0; index < arrays.length - 1; index++) {
        if (arrays[index][0] == arrays[index + 1][0]) {
            counter++;
        }
    }
    console.log(counter)
}


