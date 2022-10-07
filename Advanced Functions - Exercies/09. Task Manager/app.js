function solve() {
    document.getElementById("add").addEventListener("click", addTask);
    const nameInput = document.getElementById("task");
    const descInput = document.getElementById("description");
    const dateInput = document.getElementById("date");

    const sections = document.getElementsByTagName("section");
    const openSection = sections[1].children[1];
    const inProgressSection = document.getElementById("in-progress");
    const completeSection = sections[3].children[1];

    function addTask(event) {
        event.preventDefault();

        if (nameInput.value && descInput.value && dateInput.value) {
            const articleElement = document.createElement("article");
            const h3Element = document.createElement("h3");
            h3Element.textContent = nameInput.value;
            articleElement.appendChild(h3Element);
            const pElementDescription = document.createElement("p");
            pElementDescription.textContent = `Description: ${descInput.value}`;
            articleElement.appendChild(pElementDescription);
            const pElementDueDate = document.createElement("p");
            pElementDueDate.textContent = `Due Date: ${dateInput.value}`;
            articleElement.appendChild(pElementDueDate);
            const divElement = document.createElement("div");
            divElement.classList.add("flex");
            const startButton = document.createElement("button");
            startButton.textContent = "Start";
            startButton.classList.add("green");
            startButton.addEventListener("click", startTask);
            divElement.appendChild(startButton);
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("red");
            deleteButton.addEventListener("click", deleteTask);
            divElement.appendChild(deleteButton);
            articleElement.appendChild(divElement);
            openSection.appendChild(articleElement);
        }

        nameInput.value = "";
        descInput.value = "";
        dateInput.value = "";

        function startTask(event) {
            const article = event.target.parentNode.parentNode;
            event.target.remove();
            inProgressSection.appendChild(article);
            const finishButton = document.createElement("button");
            finishButton.textContent = "Finish";
            finishButton.classList.add("orange");
            finishButton.addEventListener("click", finishTask);
            article.children[3].appendChild(finishButton);
        }

        function deleteTask(event) {
            event.target.parentNode.parentNode.remove();
        }

        function finishTask(event) {
            const article = event.target.parentNode.parentNode;
            completeSection.appendChild(article);
            article.children[3].remove();
        }
    }
}
