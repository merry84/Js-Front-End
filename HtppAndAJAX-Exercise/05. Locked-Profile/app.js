async function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    const main = document.getElementById('main');
    main.innerHTML = ''; 

    try {
       
        const response = await fetch(baseUrl);
        if (!response.ok) {
            throw new Error(`Грешка: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        Object.values(data).forEach((profileData, index) => {
            const profileDiv = document.createElement('div');
            profileDiv.className = 'profile';

            profileDiv.innerHTML = `
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user${index}Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user${index}Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user${index}Username" value="${profileData.username}" disabled readonly />
                <div class="hiddenInfo" style="display: none;">
                    <hr>
                    <label>Email:</label>
                    <input type="email" value="${profileData.email}" disabled readonly />
                    <label>Age:</label>
                    <input type="number" value="${profileData.age}" disabled readonly />
                </div>
                <button>Show more</button>
            `;

            
            const button = profileDiv.querySelector('button');
            const hiddenInfoDiv = profileDiv.querySelector('.hiddenInfo');
            const lockRadio = profileDiv.querySelector(`input[name="user${index}Locked"][value="lock"]`);

            button.addEventListener('click', () => {
                if (!lockRadio.checked) {
                    if (hiddenInfoDiv.style.display === 'none') {
                        hiddenInfoDiv.style.display = 'block';
                        button.textContent = 'Hide it';
                    } else {
                        hiddenInfoDiv.style.display = 'none';
                        button.textContent = 'Show more';
                    }
                }
            });

            main.appendChild(profileDiv);
        });
    } catch (error) {
        console.error('Грешка при зареждане на профилите:', error);
    }
}
