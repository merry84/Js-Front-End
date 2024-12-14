function loadRepos() {
   fetch('https://api.github.com/users/testnakov/repos')
       .then(res => res.json())
       .then(data => {
           document.getElementById('res').textContent = JSON.stringify(data, null, 2); // Преобразуваме JSON обратно в текст с форматиране
       })
       .catch(err => {
           document.getElementById('res').textContent = `Error: ${err.message}`;
       });
}
