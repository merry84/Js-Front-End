async function solution() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles';
    const mainSection = document.getElementById('main');

    try {
      я
        const response = await fetch(`${baseUrl}/list`);
        if (!response.ok) {
            throw new Error(`Грешка при извличане на заглавия: ${response.statusText}`);
        }

        const articles = await response.json();

       
        for (const article of articles) {
            const articleDiv = document.createElement('div');
            articleDiv.className = 'accordion';

            articleDiv.innerHTML = `
                <div class="head">
                    <span>${article.title}</span>
                    <button class="button" id="${article._id}">More</button>
                </div>
                <div class="extra" style="display: none;">
                    <p></p>
                </div>
            `;

            const moreButton = articleDiv.querySelector('.button');
            const extraDiv = articleDiv.querySelector('.extra');

            moreButton.addEventListener('click', async () => {
                if (moreButton.textContent === 'More') {
                    try {
                        const detailsResponse = await fetch(`${baseUrl}/details/${article._id}`);
                        if (!detailsResponse.ok) {
                            throw new Error(`Грешка при извличане на съдържанието: ${detailsResponse.statusText}`);
                        }

                        const details = await detailsResponse.json();
                        extraDiv.querySelector('p').textContent = details.content;

                       
                        extraDiv.style.display = 'block';
                        moreButton.textContent = 'Less';
                    } catch (error) {
                        console.error('Грешка при зареждане на съдържанието:', error);
                    }
                } else {
                    
                    extraDiv.style.display = 'none';
                    moreButton.textContent = 'More';
                }
            });

            mainSection.appendChild(articleDiv);
        }
    } catch (error) {
        console.error('Грешка:', error);
    }
}

solution();
