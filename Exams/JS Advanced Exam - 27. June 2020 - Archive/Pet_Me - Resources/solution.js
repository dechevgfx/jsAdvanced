function solve() {
    const fields = document.querySelectorAll("#container input");
    const addButton = document.querySelector("#container button");
    const petList = document.querySelector("#adoption ul");
    const adoptedList = document.querySelector("#adopted ul");

    const input = {
        name: fields[0],
        age: fields[1],
        kind: fields[2],
        owner: fields[3],
    };

    addButton.addEventListener("click", addPet);

    function addPet(event) {
        event.preventDefault();
        let name = input.name.value.trim();
        let age = Number(input.age.value.trim());
        let kind = input.kind.value.trim();
        let owner = input.owner.value.trim();

        if (
            name == "" ||
            input.age.value.trim() == "" ||
            Number.isNaN(age) ||
            kind == "" ||
            owner == ""
        ) {
            return;
        }
        const contactButton = create("button", {}, "Contact with owner");
        const pet = create(
            "li",
            {},
            create(
                "p",
                {},
                create("strong", {}, name),
                " is a ",
                create("strong", {}, age),
                " year old ",
                create("strong", {}, kind),
            ),
            create("span", {}, `Owner: ${owner}`),
            contactButton,
        );

        contactButton.addEventListener("click", contact);

        function contact() {
            let confirmInput = create("input");
            confirmInput.placeholder = "Enter your names";
            const confirmButton = create("button", {}, "Yes! I take it!");
            const confirmDiv = create("div", {}, confirmInput, confirmButton);
            confirmButton.addEventListener(
                "click",
                adopt.bind(null, confirmInput, pet),
            );

            contactButton.remove();
            pet.appendChild(confirmDiv);
        }

        petList.appendChild(pet);

        input.name.value = "";
        input.age.value = "";
        input.kind.value = "";
        input.owner.value = "";
    }

    function adopt(input, pet) {
        const newOwner = input.value.trim();

        if (newOwner) {
            const checkBtn = create("button", {}, "Checked");
            checkBtn.addEventListener("click", check.bind(null, pet));
            pet.querySelector("div").remove();
            pet.appendChild(checkBtn);
            pet.querySelector("span").textContent = `New Owner: ${newOwner}`;
            adoptedList.appendChild(pet);
        }
    }
    function check(pet) {
        pet.remove();
    }

    function create(type, attributes, ...content) {
        const element = document.createElement(type);

        for (let property in attributes) {
            element[property] == attributes[property];
        }

        for (let item of content) {
            if (typeof item == "string" || typeof item == "number") {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;
    }
}
