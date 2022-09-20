function names(array) {
    const result = array.sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase()),
    );
    let orderStart = 1;
    result.forEach((element) => {
        console.log(`${orderStart}.${element}`);
        orderStart++;
    });
}
names(["Zohn", "aob", "Christina", "Ema"]);
