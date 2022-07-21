function result() {
    let str = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
    function append(strToAppend) {
        str += strToAppend;
    }
    function removeStart(n) {
        str = str.slice(n);
    }
    function removeEnd(n) {
        str = str.slice(0, -n);
    }
    function print() {
        console.log(str)
    }
}
let firstZero = result();
let secondZero = result();

firstZero.append('123');
firstZero.append('45');
firstZero.removeStart(2);
firstZero.removeEnd(1);

secondZero.append('hello');
secondZero.append('again');
secondZero.removeStart(3)
secondZero.removeEnd(4)

firstZero.print();
secondZero.print();