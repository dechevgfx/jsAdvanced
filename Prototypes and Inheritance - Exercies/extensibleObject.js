function extensibleObject() {
    const prototype = Object.getPrototypeOf(this);

    this.extend = function (obj) {
        for (const key in obj) {
            if (typeof obj[key] === "function") {
                prototype[key] = obj[key];
            } else {
                this[key] = obj[key];
            }
        }
    };

    return this;
}
