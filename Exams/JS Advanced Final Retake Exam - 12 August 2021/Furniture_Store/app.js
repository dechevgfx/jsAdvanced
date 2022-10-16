window.addEventListener("load", solve);

function solve() {
    const modelInput = document.getElementById("model");
    const yearInput = document.getElementById("year");
    const descriptionInput = document.getElementById("description");
    const priceInput = document.getElementById("price");
    const totalPrice = document.querySelector(".total-price");
    const addBtn = document.getElementById("add");
    const list = document.getElementById("furniture-list");

    addBtn.addEventListener("click", add);

    function add(event) {
        event.preventDefault();

        let model = modelInput.value;
        let description = descriptionInput.value;
        let year = Number(yearInput.value);
        let price = Number(priceInput.value);
        let total = Number(totalPrice.textContent);

        modelInput.value = "";
        descriptionInput.value = "";
        yearInput.value = "";
        priceInput.value = "";

        if (!model || !description) return;
        if (year <= 0 || price <= 0) return;

        let newRow = document.createElement("tr");

        let newModel = document.createElement("td");
        let newPrice = document.createElement("td");
        let newButtons = document.createElement("td");

        let newInfoButton = document.createElement("button");
        let newBuyButton = document.createElement("button");

        newModel.textContent = model;
        newPrice.textContent = price.toFixed(2);

        newInfoButton.textContent = "More Info";
        newBuyButton.textContent = "Buy it";

        newRow.classList.add("info");
        newInfoButton.classList.add("moreBtn");
        newBuyButton.classList.add("buyBtn");

        //

        let newHideRow = document.createElement("tr");

        newHideRow.classList.add("hide");
        newHideRow.style.display = "none";

        let newYear = document.createElement("td");
        let newDescription = document.createElement("td");

        newYear.textContent = `Year: ${year}`;
        newDescription.setAttribute("colspan", 3);
        newDescription.textContent = `Description: ${description}`;

        //

        newButtons.appendChild(newInfoButton);
        newButtons.appendChild(newBuyButton);

        newRow.appendChild(newModel);
        newRow.appendChild(newPrice);
        newRow.appendChild(newButtons);

        newHideRow.appendChild(newYear);
        newHideRow.appendChild(newDescription);

        list.appendChild(newRow);
        list.appendChild(newHideRow);

        //

        newInfoButton.addEventListener("click", (e) => {
            e.currentTarget.textContent === "More Info"
                ? (e.currentTarget.textContent = "Less Info")
                : (e.currentTarget.textContent = "More Info");

            newHideRow.style.display === "none"
                ? (newHideRow.style.display = "contents")
                : (newHideRow.style.display = "none");
        });

        newBuyButton.addEventListener("click", (e) => {
            total += Number(price);
            totalPrice.textContent = total.toFixed(2);
            newRow.remove();
            newHideRow.remove();
        });
    }
}
