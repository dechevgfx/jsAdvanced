(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        return !this.toString().startsWith(str)
            ? str + this.toString()
            : this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        return !this.toString().endsWith(str)
            ? this.toString() + str
            : this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.length === 0 ? true : false;
    };

    String.prototype.truncate = function (n) {
        if (Number(n) <= 3) {
            return ".".repeat(Number(n));
        }

        if (Number(n) >= this.length) {
            return this.toString();
        }

        let lastIndex = this.toString()
            .substring(0, n - 2)
            .lastIndexOf(" ");

        return lastIndex !== -1
            ? `${this.toString().substring(0, lastIndex)}...`
            : `${this.toString().substring(0, n - 3)}...`;
    };

    String.format = function (string, ...params) {
        for (let index = 0; index < params.length; index++) {
            string = string.replace(`{${index}}`, params[index]);
        }

        return string;
    };
})();
