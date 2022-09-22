function store(parameters) {
    let final = {};
    let keysArr = [];
    let insideArrOfObj = [];
    for (const iterator of parameters) {
        let [name, price] = iterator.split(" : ");
        let singleProduct = { name: name, price: price };
        insideArrOfObj.push(singleProduct);
    }
    insideArrOfObj.sort((a, b) => a.name.localeCompare(b.name));

    for (const iterator of insideArrOfObj) {
        keysArr.push(iterator.name[0]);
    }
    let uniqueKey = [...new Set(keysArr)];
    uniqueKey.forEach((key) => (final[key] = []));

    for (const iterator of insideArrOfObj) {
        if (final.hasOwnProperty(iterator.name[0])) {
            final[iterator.name[0]].push(iterator);
        }
    }
    let entries = Object.entries(final);
    for (let index = 0; index < entries.length; index++) {
        const element = entries[index];
        console.log(element[0]);
        element[1].forEach((product) =>
            console.log(`  ${product.name}: ${product.price}`),
        );
    }
}
store([
    "Appricot : 20.4",

    "Fridge : 1500",

    "TV : 1499",

    "Deodorant : 10",

    "Boiler : 300",

    "Apple : 1.25",

    "Anti-Bug Spray : 15",

    "T-Shirt : 10",
]);
