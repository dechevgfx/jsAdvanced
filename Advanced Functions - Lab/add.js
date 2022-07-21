function solution(baseNum) {
    let number = baseNum;
    function add(addingNumber) {
        return number + addingNumber;
    }
    return add;
}
