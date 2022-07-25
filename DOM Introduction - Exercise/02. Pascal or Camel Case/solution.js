function solve() {
  let text = document.getElementById('text').value;
  let conv = document.getElementById('naming-convention').value;
  let result = '';

  if (conv === 'Pascal Case') {
    result += (text[0].toUpperCase())
    for (let index = 1; index < text.length; index++) {
      if (text[index] === ' ') {
        result += (text[index + 1].toUpperCase())
        index++;
      } else {
        result += (text[index].toLowerCase());
      }
    }
  } else if (conv === 'Camel Case') {
    for (let index = 0; index < text.length; index++) {
      if (text[index] === ' ') {
        result += (text[index + 1].toUpperCase());
        index++;
      } else {
        result += (text[index].toLowerCase());
      }
    }
  } else {
    result = 'Error!'
  }
  let resultEl = document.getElementById('result');
  resultEl.textContent = result;

}