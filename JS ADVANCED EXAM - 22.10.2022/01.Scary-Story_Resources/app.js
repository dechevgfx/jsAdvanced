window.addEventListener("load", solve);

function solve() {
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const ageInput = document.getElementById("age");
    const titleInput = document.getElementById("story-title");
    const genreInput = document.getElementById("genre");
    const storyInput = document.querySelector("#story");
    const ul = document.getElementById("preview-list");
    const main = document.getElementById("main");

    const buttonPublish = document.getElementById("form-btn");

    buttonPublish.addEventListener("click", () => {
        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let age = ageInput.value;
        let title = titleInput.value;
        let genre = genreInput.value;
        let story = storyInput.value;

        if (!firstName || !lastName || !age || !title || !story) {
            return;
        } else {
            let li = document.createElement("li");
            li.classList.add("story-info");
            let article = document.createElement("article");
            let h4 = document.createElement("h4");
            h4.textContent = `Name: ${firstName} ${lastName}`;
            let pAge = document.createElement("p");
            pAge.textContent = `Age: ${age}`;
            let pTitle = document.createElement("p");
            pTitle.textContent = `Title: ${title}`;
            let pGenre = document.createElement("p");
            pGenre.textContent = `Genre: ${genre}`;
            let pStory = document.createElement("p");
            pStory.innerHTML = story;

            let saveBtn = document.createElement("button");
            saveBtn.textContent = "Save Story";
            saveBtn.classList.add("save-btn");
            let editBtn = document.createElement("button");
            editBtn.textContent = "Edit Story";
            editBtn.classList.add("edit-btn");
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete Story";
            deleteBtn.classList.add("delete-btn");

            article.appendChild(h4);
            article.appendChild(pAge);
            article.appendChild(pTitle);
            article.appendChild(pGenre);
            article.appendChild(pStory);

            li.appendChild(article);
            li.appendChild(saveBtn);
            li.appendChild(editBtn);
            li.appendChild(deleteBtn);

            ul.appendChild(li);

            editBtn.addEventListener("click", () => {
                firstNameInput.value = firstName;
                lastNameInput.value = lastName;
                ageInput.value = age;
                titleInput.value = title;
                genreInput.value = genre;
                storyInput.value = story;
                saveBtn.disabled = true;
                editBtn.disabled = true;
                deleteBtn.disabled = true;
                if (buttonPublish.disabled == true) {
                    buttonPublish.disabled = false;
                }
                li.remove();
            });

            saveBtn.addEventListener("click", () => {
                let h1 = document.createElement("h1");
                h1.textContent = "Your scary story is saved!";
                main.innerHTML = "";
                main.appendChild(h1);
            });
            deleteBtn.addEventListener("click", () => {
                li.remove();

                if (buttonPublish.disabled == true) {
                    buttonPublish.disabled = false;
                }
            });

            firstNameInput.value = "";
            lastNameInput.value = "";
            ageInput.value = "";
            titleInput.value = "";
            genreInput.value = "";
            storyInput.value = "";

            buttonPublish.disabled = true;
        }
    });
}
