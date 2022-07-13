function agregate(array) {
    let sum = 0;
    let inverse = 0;
    let concat = ""
    for (let num of array) {
        sum += num;
        inverse += 1/num;
        concat += "" + num
    }
    console.log(sum);
    console.log(inverse);
    console.log(concat);
}
agregate([1,2,3])