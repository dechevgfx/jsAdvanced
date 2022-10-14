class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {
        products.forEach((product) => {
            let [productName, productQuantity, productTotalPrice] =
                product.split(" ");
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
            if (productTotalPrice <= this.budgetMoney) {
                this.budgetMoney -= productTotalPrice;
                if (!Object.keys(this.stockProducts).includes(productName)) {
                    this.stockProducts[productName] = productQuantity;
                    this.history.push(
                        `Successfully loaded ${productQuantity} ${productName}`,
                    );
                } else {
                    this.stockProducts[productName] += productQuantity;
                    this.history.push(
                        `Successfully loaded ${productQuantity} ${productName}`,
                    );
                }
            } else {
                this.history.push(
                    `There was not enough money to load ${productQuantity} ${productName}`,
                );
            }
        });
        return this.history.join("\n");
    }

    addToMenu(meal, neededProducts, price) {
        price = Number(price);
        if (!this.menu.hasOwnProperty(meal)) {
            const product = neededProducts.reduce((obj, product) => {
                let [name, quantity] = product.split(" ");
                obj[name] = quantity;
                return obj;
            }, {});

            this.menu[meal] = {
                products: product,
                price,
            };
            let size = Object.keys(this.menu).length;
            if (size === 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            }
            return `Great idea! Now with the ${meal} we have ${size} meals in the menu, other ideas?`;
        }
        return `The ${meal} is already in the our menu, try something different.`;
    }
    showTheMenu() {
        const fullMenu = [];
        if (!Object.keys(this.menu).length) {
            return "Our menu is not ready yet, please come later...";
        }
        Object.keys(this.menu).forEach((meal) =>
            fullMenu.push(`${meal} - $ ${this.menu[meal].price}`),
        );
        return fullMenu.join("\n");
    }

    makeTheOrder(meal) {
        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        const checkForProduct = Object.keys(this.menu[meal].products).some(
            (productToCheck) =>
                this.menu[meal].products[productToCheck] <=
                this.stockProducts[productToCheck],
        );

        if (!checkForProduct) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        this.budgetMoney += this.menu[meal].price;
        Object.keys(this.menu[meal].products).forEach(
            (currentProduct) =>
                (this.stockProducts[currentProduct] -=
                    this.menu[meal].products[currentProduct]),
        );
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}

let kitchen = new Restaurant(1000);

console.log(
    kitchen.loadProducts([
        "Yogurt 30 3",
        "Honey 50 4",
        "Strawberries 20 10",
        "Banana 5 1",
    ]),
);

console.log(
    kitchen.addToMenu(
        "frozenYogurt",
        ["Yogurt 1", "Honey 1", "Banana 1", "Strawberries 10"],
        9.99,
    ),
);

console.log(kitchen.showTheMenu());

console.log(kitchen.makeTheOrder("frozenYogurt"));
