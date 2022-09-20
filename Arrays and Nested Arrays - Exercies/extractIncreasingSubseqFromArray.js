// function solve(array) {
//     let biggest = Number.MIN_SAFE_INTEGER;
//     const result = array.filter((element) => {
//         if (element > biggest) {
//             biggest = element;
//             return true;
//         }
//         return false;
//  })
//     return result;

// }


function increasingSubseq(array) {
    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;

    array.forEach(element => {
        if (element >= biggest) {
            result.push(element)
            biggest = element;
        }
    });
    return result;

}