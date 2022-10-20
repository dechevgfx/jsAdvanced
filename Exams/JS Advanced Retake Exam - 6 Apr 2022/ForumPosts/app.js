window.addEventListener("load", solve);

function solve() {
    const titleInput = document.getElementById("post-title");
    const categoryInput = document.getElementById("post-category");
    const contentInput = document.getElementById("post-content");
    const ul = document.getElementById("review-list");
    const publishedUl = document.getElementById("published-list");
    const publishBtn = document.getElementById("publish-btn");
    publishBtn.addEventListener("click", () => {
        if (!titleInput.value || !categoryInput.value || !contentInput.value) {
            return;
        } else {
            let inputOne = titleInput.value;
            let inputTwo = categoryInput.value;
            let inputThree = contentInput.value;
            const newLi = document.createElement("li");
            newLi.classList.add("rpost");
            const newArticle = document.createElement("article");
            const newH4 = document.createElement("h4");
            newH4.textContent = inputOne;
            const newPCat = document.createElement("p");
            newPCat.textContent = `Category: ${inputTwo}`;
            const newPContent = document.createElement("p");
            newPContent.textContent = `Content: ${inputThree}`;
            const newEditBtn = document.createElement("button");
            newEditBtn.classList.add("action-btn", "edit");
            newEditBtn.textContent = "Edit";
            const newApproveBtn = document.createElement("button");
            newApproveBtn.classList.add("action-btn", "approve");
            newApproveBtn.textContent = "Approve";

            newArticle.appendChild(newH4);
            newArticle.appendChild(newPCat);
            newArticle.appendChild(newPContent);
            newLi.appendChild(newArticle);
            newLi.appendChild(newEditBtn);
            newLi.appendChild(newApproveBtn);
            ul.appendChild(newLi);

            titleInput.value = "";
            categoryInput.value = "";
            contentInput.value = "";

            newEditBtn.addEventListener("click", () => {
                newLi.remove();
                titleInput.value = inputOne;
                categoryInput.value = inputTwo;
                contentInput.value = inputThree;
            });

            newApproveBtn.addEventListener("click", () => {
                newLi.remove();
                publishedUl.appendChild(newLi);
                document
                    .querySelector(
                        "#published-list > li > button.action-btn.edit",
                    )
                    .remove();
                document
                    .querySelector(
                        "#published-list > li > button.action-btn.approve",
                    )
                    .remove();
            });
            const clear = document.getElementById("clear-btn");
            clear.addEventListener("click", () => {
                newLi.remove();
            });
        }
    });
}
