const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character';

fetch(URL_CHARACTERS)
    .then(response => response.json())
    .then((data) => showData(data)) 

const cardPetition =document.getElementById('fetch-petition');
try {
    function showData(data) {
        console.log(data.results);
        data.results.map((character) => {
            cardPetition.innerHTML += `
                <div class="card col-3 mx-1 my-5" style="color: #1e751d ; border: 5px solid #29bd27; border-radius: 15px; background-color: #56e954; hover:zoom">
                    <div class="card-body">
                        <img src=${character.image} class="card-img-top" alt=${character.name}>
                        <h2 style="text-align:center">${character.name}</h2>
                        <h5 class="card-title"><span> Especie:</span> ${character.species}</h5>
                        <h5 class="card-title"><span> Estado:</span> ${character.status}</h5>
                        <h5 class="card-title">${character.type}</h5>
                        <h5 class="card-title"><span> Género:</span> ${character.gender}</h5>
                        <h5 class="card-title"><span> Ubicación:</span> ${character.location.name}</h5>
                        <h5 class="card-title"><span> Origen:</span> ${character.origin.name}</h5>
   
                    </div>
                </div>   
            `
        })
    }
} catch (error) {
    console.log(error);
    cardPetition.innerHTML += `<h2 style="text-align: center">Hubo un error, intente nuevamente en unos minutos</h2>`
}
    

