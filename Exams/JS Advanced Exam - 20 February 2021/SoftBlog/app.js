function solve() {
    const authorInput = document.getElementById("creator");
    const titleInput = document.getElementById("title");
    const categoryInput = document.getElementById("category");
    const contentInput = document.getElementById("content");

    const createBtn = document.getElementsByClassName("create")[0];
    let main = document.querySelector(".site-content main section");

    createBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const author = authorInput.value;
        const title = titleInput.value;
        const category = categoryInput.value;
        const content = contentInput.value;

        let article = document.createElement("article");
        let h1 = document.createElement("h1");
        let pCategory = document.createElement("p");
        let pCreator = document.createElement("p");
        let pDescription = document.createElement("p");
        let sCreator = document.createElement("strong");
        let sCategory = document.createElement("strong");

        let divWithBtns = document.createElement("div");
        let deleteBtn = document.createElement("button");
        let archiveBtn = document.createElement("button");

        divWithBtns.classList.add("buttons");
        deleteBtn.classList.add("btn", "delete");
        archiveBtn.classList.add("btn", "archive");

        deleteBtn.textContent = "Delete";
        archiveBtn.textContent = "Archive";

        divWithBtns.appendChild(deleteBtn);
        divWithBtns.appendChild(archiveBtn);

        sCreator.textContent = author;
        sCategory.textContent = category;
        h1.textContent = title;
        pCategory.textContent = `Category:`;
        pCategory.appendChild(sCategory);
        pCreator.textContent = `Creator:`;
        pCreator.appendChild(sCreator);
        pDescription.textContent = content;

        article.appendChild(h1);
        article.appendChild(pCategory);
        article.appendChild(pCreator);
        article.appendChild(pDescription);
        article.appendChild(divWithBtns);

        //-----------------------------------------
        archiveBtn.addEventListener("click", (e) => {
            e.preventDefault();
            let ol = document.querySelector(
                "body > div > div > aside > section.archive-section > ol",
            );
            let li = document.createElement("li");
            li.textContent = title;
            ol.appendChild(li);
            e.target.parentNode.parentNode.remove();

            let list, i, switching, b, shouldSwitch;
            list = ol;
            switching = true;
            // Make a loop that will continue until no switching has been done:
            while (switching) {
                // Start by saying: no switching is done:
                switching = false;
                b = list.getElementsByTagName("LI");
                // Loop through all list items:
                for (i = 0; i < b.length - 1; i++) {
                    // Start by saying there should be no switching:
                    shouldSwitch = false;
                    // Check if the next item should switch place with the current item:
                    if (
                        b[i].innerHTML.toLowerCase() >
                        b[i + 1].innerHTML.toLowerCase()
                    ) {
                        // If next item is alphabetically lower than current item, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    // If a switch has been marked, make the switch and mark the switch as done:
                    b[i].parentNode.insertBefore(b[i + 1], b[i]);
                    switching = true;
                }
            }
        });

        //-------------------------------------------
        deleteBtn.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.parentNode.parentNode.remove();
        });
        main.appendChild(article);

        authorInput.value = "";
        titleInput.value = "";
        categoryInput.value = "";
        contentInput.value = "";
    });
}
