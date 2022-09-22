function functionName(parameters) {
    let arr = [];
    for (let iterator of parameters) {
        let [city, product, price] = iterator.split(" | ");
        let singleProduct = {
            product: product,
            city: city,
            price: Number(price),
        };
        const isFound = arr.some((element) => {
            if (element.product == product) {
                return true;
            }
            return false;
        });

        if (!isFound) {
            arr.push(singleProduct);
        } else {
            let indexOf = arr.findIndex((object) => {
                return object.product === product;
            });
            if (arr[indexOf].price > price) {
                arr[indexOf].city = city;
                arr[indexOf].price = price;
            }
        }
    }
    arr.forEach((el) =>
        console.log(`${el.product} -> ${el.price} (${el.city})`),
    );
}
functionName([
    "Sofia City | Audi | 100000",
    "Sofia City | BMW | 100000",
    "Sofia City | Mitsubishi | 10000",
    "Sofia City | Mercedes | 10000",
    "Sofia City | NoOffenseToCarLovers | 0",
    "Mexico City | Audi | 1000",
    "Mexico City | BMW | 99999",
    "Mexico City | Mitsubishi | 10000",
    "New York City | Mitsubishi | 1000",
    "Washington City | Mercedes | 1000",
]);
