function star(param) {
    if (param) {
        for (let index = 0; index < param; index++) {
            console.log("* ".repeat(Number(param)));
        }
    } else {
        for (let index = 0; index < 5; index++) {
            console.log("* ".repeat(5));
        }
    }
}
