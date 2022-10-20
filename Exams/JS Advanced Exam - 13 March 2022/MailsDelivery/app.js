function solve() {
    const nameInput = document.getElementById("recipientName");
    const titleInput = document.getElementById("title");
    const messageInput = document.getElementById("message");

    const addButton = document.getElementById("add");
    const resetButton = document.getElementById("reset");

    const middleBox = document.getElementById("list");
    addButton.addEventListener("click", (e) => {
        e.preventDefault();

        if (!nameInput.value || !titleInput.value || !messageInput.value) {
            return;
        } else {
            let name = nameInput.value;
            let title = titleInput.value;
            let message = messageInput.value;
            //li
            const li = document.createElement("li");

            // h4 title
            const h4Title = document.createElement("h4");
            h4Title.textContent = `Title: ${title}`;
            // h4 recipient Name
            const h4Name = document.createElement("h4");
            h4Name.textContent = `Recipient Name: ${name}`;
            // span
            const spanMessage = document.createElement("span");
            spanMessage.textContent = message;
            // div id=list-action > button * 2 id=send,delete type=submit
            const divButtons = document.createElement("div");
            divButtons.setAttribute("id", "list-action");
            const sendButton = document.createElement("button");
            sendButton.textContent = "Send";
            sendButton.setAttribute("id", "send");
            sendButton.setAttribute("type", "submit");
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.setAttribute("id", "delete");
            deleteButton.setAttribute("type", "submit");

            divButtons.appendChild(sendButton);
            divButtons.appendChild(deleteButton);

            li.appendChild(h4Title);
            li.appendChild(h4Name);
            li.appendChild(spanMessage);
            li.appendChild(divButtons);

            middleBox.appendChild(li);

            let sendList = document.querySelector(
                "body > section > article > div.sent-mails > ul",
            );
            let delBtn = document.createElement("button");
            delBtn.classList.add("delete");
            delBtn.setAttribute("type", "submit");
            delBtn.textContent = "Delete";
            let sendLi = document.createElement("li");
            let spanTo = document.createElement("span");
            spanTo.textContent = `To: ${name}`;
            let spanTitle = document.createElement("span");
            spanTitle.textContent = `Title: ${title}`;
            let div = document.createElement("div");
            div.classList.add("btn");

            sendButton.addEventListener("click", () => {
                div.appendChild(delBtn);
                sendLi.appendChild(spanTo);
                sendLi.appendChild(spanTitle);
                sendLi.appendChild(div);
                sendList.appendChild(sendLi);
                li.remove();

                // <span>To: John@abv.bg</span>
                // <span>Title: For Work</span>
                // <div class="btn">
                //name
                //title
                //remove send btn
                //append to send mails
            });
            deleteButton.addEventListener("click", (e) => {
                //remove li from send mails
                //remove buttons
                //append to deleted mails
                let deleteUl = document.querySelector(
                    "body > section > article > div.trash > ul",
                );
                let deleteLi = document.createElement("li");
                let spanToDel = document.createElement("span");
                spanToDel.textContent = `To: ${name}`;
                let spanTitleDel = document.createElement("span");
                spanTitleDel.textContent = `Title: ${title}`;
                deleteLi.appendChild(spanToDel);
                deleteLi.appendChild(spanTitleDel);
                deleteUl.appendChild(deleteLi);
                e.target.parentNode.parentNode.remove();
            });
            delBtn.addEventListener("click", (e) => {
                let deleteUl = document.querySelector(
                    "body > section > article > div.trash > ul",
                );
                let deleteLi = document.createElement("li");
                let spanToDel = document.createElement("span");
                spanToDel.textContent = `To: ${name}`;
                let spanTitleDel = document.createElement("span");
                spanTitleDel.textContent = `Title: ${title}`;
                deleteLi.appendChild(spanToDel);
                deleteLi.appendChild(spanTitleDel);
                deleteUl.appendChild(deleteLi);
                e.target.parentNode.parentNode.remove();
            });

            nameInput.value = "";
            titleInput.value = "";
            messageInput.value = "";
        }
    });

    resetButton.addEventListener("click", () => {
        nameInput.value = "";
        titleInput.value = "";
        messageInput.value = "";
    });
}
solve();
