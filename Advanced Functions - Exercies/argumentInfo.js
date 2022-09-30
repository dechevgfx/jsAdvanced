function argumentInfo() {
    const parameters = Array.from(arguments);
    let typeObj = {};
    let paramArray = [];
    for (const param of parameters) {
        let type = typeof param;
        if (!paramArray.includes(`${type}: ${param}`)) {
            paramArray.push(`${type}: ${param}`);
        }
        if (!typeObj[type]) {
            typeObj[type] = 0;
        }
        typeObj[type]++;
    }
    paramArray.forEach((el) => {
        console.log(el);
    });
    function sort(type) {
        return Object.entries(type).sort((a, b) => b[1] - a[1]);
    }
    sort(typeObj).forEach((el) => {
        let [key, val] = el;
        console.log(`${key} = ${val}`);
    });
}
argumentInfo("cat", 42, 42, 42, function () {
    console.log("Hello world!");
});
