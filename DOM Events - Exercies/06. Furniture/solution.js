function solve() {
    document
        .getElementById("exercise")
        .children[2].addEventListener("click", addRows);
    document.getElementsByTagName("button")[1].addEventListener("click", buy);

    function addRows() {
        const objArray = JSON.parse(
            document.getElementById("exercise").children[1].value,
        );

        for (let obj of objArray) {
            //declare all the element variables
            let row = document.createElement("tr");
            const imageTD = document.createElement("td");
            const nameTD = document.createElement("td");
            const priceTD = document.createElement("td");
            const decorationTD = document.createElement("td");
            const checkboxTD = document.createElement("td");

            //create and append img element
            const imageEl = document.createElement("img");
            imageEl.src = obj["img"];
            imageTD.appendChild(imageEl);
            row.appendChild(imageTD);

            //create and append name element
            const nameElement = document.createElement("p");
            nameElement.textContent = obj["name"];
            nameTD.appendChild(nameElement);
            row.appendChild(nameTD);

            //create and append price element
            const priceElement = document.createElement("p");
            priceElement.textContent = obj["price"];
            priceTD.appendChild(priceElement);
            row.appendChild(priceTD);

            //create and append decoration factor element
            const decorElement = document.createElement("p");
            decorElement.textContent = obj["decFactor"];
            decorationTD.appendChild(decorElement);
            row.appendChild(decorationTD);

            //create and append checkbox element
            const checkboxInputElement = document.createElement("input");
            checkboxInputElement.type = "checkbox";
            checkboxTD.appendChild(checkboxInputElement);
            row.appendChild(checkboxTD);

            //add row to the tbody
            document.getElementsByTagName("tbody")[0].appendChild(row);
        }
    }

    function buy() {
        const namesArr = [];
        const priceArr = [];
        const decorPointsArr = [];

        const checkboxesArr = Array.from(
            document.getElementsByTagName("input"),
        );
        checkboxesArr.forEach((x) => {
            if (x.checked) {
                namesArr.push(
                    x.parentNode.parentNode.children[1].children[0].textContent,
                );
                priceArr.push(
                    Number(
                        x.parentNode.parentNode.children[2].children[0]
                            .textContent,
                    ),
                );
                decorPointsArr.push(
                    Number(
                        x.parentNode.parentNode.children[3].children[0]
                            .textContent,
                    ),
                );
            }
        });

        let stringOrderInfo = `Bought furniture: ${namesArr.join(
            ", ",
        )}\nTotal price: ${priceArr
            .reduce((a, b) => a + b, 0)
            .toFixed(2)}\nAverage decoration factor: ${
            decorPointsArr.reduce((a, b) => a + b, 0) / decorPointsArr.length
        }`;
        document.getElementsByTagName("textarea")[1].textContent =
            stringOrderInfo;
    }
}
