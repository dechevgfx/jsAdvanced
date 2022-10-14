window.addEventListener("load", solution);

function solution() {
    let firstNameEl = document.getElementById("fname");
    let emailEl = document.getElementById("email");
    let phoneEl = document.getElementById("phone");
    let addressEl = document.getElementById("address");
    let postcodeEl = document.getElementById("code");

    let blockEl = document.querySelector("#block");

    let submitBtnEl = document.getElementById("submitBTN");
    let editBtnEl = document.getElementById("editBTN");
    let continueBtnEl = document.getElementById("continueBTN");

    let infoPreviewUl = document.getElementById("infoPreview");

    submitBtnEl.addEventListener("click", function () {
        const name = firstNameEl.value;
        const email = emailEl.value;
        const phone = phoneEl.value;
        const address = addressEl.value;
        const postCode = postcodeEl.value;

        if (name && email) {
            const data = [
                create("li", `Full Name: ${name}`),
                create("li", `Email: ${email}`),
                create("li", `Phone Number: ${phone}`),
                create("li", `Address: ${address}`),
                create("li", `Postal Code: ${postCode}`),
            ];
            data.forEach((listItem) => infoPreviewUl.appendChild(listItem));
            submitBtnEl.disabled = true;
            editBtnEl.disabled = false;
            continueBtnEl.disabled = false;

            editBtnEl.addEventListener(
                "click",
                edit.bind(null, name, email, phone, address, postCode),
            );
        }
        firstNameEl.value = "";
        emailEl.value = "";
        phoneEl.value = "";
        addressEl.value = "";
        postcodeEl.value = "";
    });
    continueBtnEl.addEventListener("click", function () {
        Array.from(blockEl.childNodes).forEach((element) => element.remove());
        blockEl.appendChild(create("h3", `Thank you for your reservation!`));
    });

    function edit(name, email, phone, address, postCode) {
        firstNameEl.value = name;
        emailEl.value = email;
        phoneEl.value = phone;
        addressEl.value = address;
        postcodeEl.value = postCode;

        submitBtnEl.disabled = false;

        editBtnEl.disabled = true;
        continueBtnEl.disabled = true;

        Array.from(infoPreviewUl.querySelectorAll("li")).forEach((element) =>
            element.remove(),
        );
    }

    // HELPERS

    function create(typeOfElement, ...dataArray) {
        const element = document.createElement(typeOfElement);

        for (let item of dataArray) {
            if (typeof item == "string" || typeof item == "number") {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }
}
