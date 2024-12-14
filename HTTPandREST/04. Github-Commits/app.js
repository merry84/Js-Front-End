async function loadCommits() {
    
    const username = document.getElementById("username").value.trim();
    const repo = document.getElementById("repo").value.trim();

   
    const commitsList = document.getElementById("commits");

    commitsList.innerHTML = "";

    try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`);

       
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }

    
        const commits = await response.json();

        commits.forEach(commit => {
            const listItem = document.createElement("li");
            const author = commit.commit.author.name;
            const message = commit.commit.message;
            listItem.textContent = `${author}: ${message}`;
            commitsList.appendChild(listItem);
        });
    } catch (error) {
        
        const errorItem = document.createElement("li");
        errorItem.textContent = `Error: ${error.message} (Not Found)`;
        commitsList.appendChild(errorItem);
    }
}
