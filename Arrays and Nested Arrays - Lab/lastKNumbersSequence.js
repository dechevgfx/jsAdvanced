function lastKNumberSequence(n, k) {
    let result = [1];
    for(let index = 1; index < n; index++){
        result[index] = sum(result, k);
    }
    function sum(array = result, k) {
        k = array.length > k ? k : array.length;
        let finalSum = 0;
        for(let index = 1; index <= k; index++){
            finalSum += array[array.length - index];
        }
        return finalSum;
    }
    return result;
}
lastKNumberSequence(6, 3)