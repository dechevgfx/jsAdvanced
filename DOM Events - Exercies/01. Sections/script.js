  
function create(words) {
   for (let word of words) {
       let div = document.createElement('div');
       let paragraph = document.createElement('p')
       paragraph.style.display = 'none';
       paragraph.textContent = word;
       div.appendChild(paragraph);
       div.addEventListener('click', function() {
           paragraph.style.display = 'block';
       })
       let content = document.getElementById('content');
       content.appendChild(div);
   }
}