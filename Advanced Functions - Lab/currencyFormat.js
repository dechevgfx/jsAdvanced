function createFormatter(separator, symbol, symbolFirst, formatter) {

    let formatFunc = function(value) {

        return formatter(separator, symbol, symbolFirst, value);

    }

    return formatFunc;

}