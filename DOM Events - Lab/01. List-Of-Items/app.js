function addItem() {

    //select input field, read input value
    const txt = document.getElementById("newItemText").value;

    //create <li>
    const liElement = document.createElement("li");

    //set text of new element to input value
    liElement.textContent = txt;

    //select list from html page
    const ulElement = document.getElementById("items");

    //append new element to list
    ulElement.appendChild(liElement);
}

//----------------------------------------------------------------------------------
// function addItem() {
//     //create <li>
//     const liElement = document.createElement("li");

//     //set text of new element to input value
//     liElement.textContent = document.getElementById("newItemText").value;

//     //append new element to list
//     document.getElementById("items").appendChild(liElement);
// }


//----------------------------------------------------------------------------------

// function addItem() {
//     //create <li>
//     const liElement = document.createElement("li");

//     //set text of new element to input value
//     liElement.textContent = document.getElementById("newItemText").value;

//     //append new element to list
//     document.getElementById("items").appendChild(liElement);

//      // Clear display after add
//      document.getElementById("newItemText").value = "";
// }

