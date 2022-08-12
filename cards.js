const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character';

fetch(URL_CHARACTERS)
    .then(response => response.json())
    .then((data) => showData(data)) 

const cardPetition =document.getElementById('fetch-petition');

    function showData(data) {
        console.log(data.results);
        data.results.map((character) => {
            cardPetition.innerHTML += `
                <div class="card col-3 mx-1 my-1 shadow" style="border: 5px solid #198754; border-radius: 15px; background-color: #ffc107">
                    <div class="card-body">
                        <img src=${character.image} class="card-img-top" alt=${character.name}>
                        <h2 style="text-align:center">${character.name}</h2>
                        <h5 class="card-title"><b>Especie:</b> ${character.species}</h5>
                        <h5 class="card-title"><b>Estado:</b> ${character.status}</h5>
                        <h5 class="card-title">${character.type}</h5>
                        <h5 class="card-title"><b>Género:</b> ${character.gender}</h5>
                        <h5 class="card-title"><b>Ubicación:</b> ${character.location.name}</h5>
                        <h5 class="card-title"><b>Origen:</b> ${character.origin.name}</h5>
   
                    </div>
                </div>   
            `
        })
    }

