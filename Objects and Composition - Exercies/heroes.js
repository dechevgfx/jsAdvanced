function heroes() {
    function hero(name, stamina, attack, message) {
        return {
            name,
            message,
            health: 100,
            [stamina]: 100,
            [attack]: function (message = "") {
                console.log(this.message + message);
                this[stamina] -= 1;
            },
        };
    }

    return {
        mage: (n) => new hero(n, "mana", `cast`, `${n} cast `),
        fighter: (n) =>
            new hero(n, "stamina", `fight`, `${n} slashes at the foe!`),
    };
}
