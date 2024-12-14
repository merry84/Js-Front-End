async function loadRepos() {
   
    const username = document.getElementById("username").value.trim();
    
    const reposList = document.getElementById("repos");

    
    reposList.innerHTML = "";

    try {
       
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

     
        const repositories = await response.json();

        
        repositories.forEach(repo => {
            const listItem = document.createElement("li");
            const link = document.createElement("a"); 
            link.href = repo.html_url; // Линк към страницата 
            link.textContent = repo.full_name; // Показване на името
            listItem.appendChild(link); 
            reposList.appendChild(listItem); 
        });
    } catch (error) {
      
        const errorItem = document.createElement("li");
        errorItem.textContent = "An error occurred: " + error.message;
        reposList.appendChild(errorItem);
    }
}
