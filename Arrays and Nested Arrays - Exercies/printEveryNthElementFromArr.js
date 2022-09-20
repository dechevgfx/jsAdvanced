function print(array, n) {
    return array.filter((element, index) => index % n == 0);
}