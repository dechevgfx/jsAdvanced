function solve() {
    let totalPrice = 0;
    let productList = [];
    let textArea = document.querySelector("body > div > textarea");
    let addBtn = document.getElementsByClassName("add-product");
    let arrayAddBtn = Array.from(addBtn);
    for (let i = 0; i < arrayAddBtn.length; i++) {
        arrayAddBtn[i].addEventListener("click", function one() {
            let name = document.querySelector(
                `body > div > div:nth-child(${
                    i + 2
                }) > div.product-details > div`,
            ).textContent;
            let price = document.querySelector(
                `body > div > div:nth-child(${i + 2}) > div.product-line-price`,
            ).textContent;
            if (!productList.includes(name)) {
                productList.push(name);
            }
            let result = `Added ${name} for ${price} to the cart.\n`;
            totalPrice += Number(price);
            textArea.value += result;
        });
    }
    let checkOut = document.querySelector("body > div > button.checkout");
    checkOut.addEventListener("click", function final() {
        textArea.value += `You bought ${productList.join(
            ", ",
        )} for ${totalPrice.toFixed(2)}.`;
        disableButtons();
    });

    function disableButtons() {
        let buttons = Array.from(document.querySelectorAll("button"));
        buttons.forEach((button) => (button.disabled = true));
    }
}
