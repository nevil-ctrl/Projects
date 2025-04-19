const charactersContainer = document.querySelector('#characters');

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then((data) => {
        const charactersHTML = data.results.map(character => {
            return  `
                <div class="character">
                    <img src="${character.image}" alt="${character.name}">
                    <h2 class="name" >${character.name}</h2>
                    <p class = "Status" >Status: ${character.status}</p>
                    <p class = "Species">Species: ${character.species}</p>
                    <div class="location">
                    <p class =" location" >Location: ${character.location.name}</p>
                    </div>
                </div>
            `;
        }).join('');
        charactersContainer.innerHTML = charactersHTML;
    })
    .catch(error => console.error('Error fetching data:', error));