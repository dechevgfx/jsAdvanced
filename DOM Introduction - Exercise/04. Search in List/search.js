function search() {
   const word = document.getElementById('searchText').value;
   const list = Array.from(document.querySelectorAll('#towns li'));
   const match = document.getElementById('result');

   let matchCounter = 0;

   for (const town of list) {
      if (town.textContent.includes(word) && word !== '') {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matchCounter++;
      } else {
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
      match.textContent = `${matchCounter} matches found`;
   }
}
