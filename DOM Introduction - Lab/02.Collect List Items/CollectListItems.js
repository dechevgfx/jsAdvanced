function extractText() {
    const items = document.getElementById('items').children;

    const result = [];

    for (const item of Array.from(items)) {
        result.push(item.textContent)
    }
    document.getElementById('result').textContent = result.join('\n');
}

// function extractText() {
//     const items = document.querySelectorAll('#items li');

//     const result = [...items].map(e => e.textContent).join('\n');

//     document.getElementById('result').value = result;
// }

