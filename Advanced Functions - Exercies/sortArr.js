function sortingArray(array, order) {
    if (order == "asc") {
        return ascending(array);
    } else {
        return descending(array);
    }

    function ascending(array) {
        array.sort((a, b) => a - b);
        return array;
    }
    function descending(array) {
        array.sort((a, b) => b - a);
        return array;
    }
}
