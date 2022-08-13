const URL_USERS = "https://jsonplaceholder.typicode.com/users";

fetch(URL_USERS)
  .then((response) => response.json())
  .then((data) => showData(data));

const cardPetition = document.getElementById("fetch-user-petition");
console.log(cardPetition);

try {
  function showData(data) {
    console.log(data);
    data.map((user, index) => {
      console.log("hola");
      cardPetition.innerHTML += `
        <tr>
          <th scope="row">${index + 1}</th>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.address.city}</td>
          <td>${user.company.name}</td>
        </tr>
      `;
    });
  }
} catch (error) {
  console.log(error);
  cardPetition.innerHTML += `<h2 style="text-align: center">Hubo un error, intente nuevamente en unos minutos</h2>`
}

