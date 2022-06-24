// function deleteByEmail() {

//     //read input field(email) value by ("name:")
//     const email = document.querySelector('input[name="email"]').value;
//     //select all table cells from the last col
//     const rows = Array.from(document.querySelectorAll("tbody tr"));

//     let deleted = false;
//     //iterate over cells
//     for (let row of rows) {
//         //if text matches input value -> delete row
//         if (row.children[1].textContent == email) {

//             //remove row from parentNode
//             row.parentNode.removeChild(row);
//             deleted = true;
//             //display result message
//             document.getElementById("result").textContent = "Deleted.";
//         }
//     }
//     //check if email is in table
//     if (deleted != true) {
//         document.getElementById("result").textContent = "Not found.";
//     }

// }


function deleteByEmail() {
    //read input field(email) value by ("name:")
    const email = document.querySelector('input[name="email"]').value;
    const resultElement = document.getElementById("result");

    //select all table cells from the last col
    const rows = Array.from(document.querySelectorAll("tbody tr"));

    //iterate over cells
    const matches = rows.filter(r => r.children[1].textContent == email);
    //if text matches input value -> delete row else print: Not found
    if (matches.length > 0) {
        matches.forEach(r => r.remove())
        resultElement.textContent = "Deleted.";
    } else {
        resultElement.textContent = "Not found.";
    }
}

