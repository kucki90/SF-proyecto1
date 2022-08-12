const URL_USERS = "https://jsonplaceholder.typicode.com/users";

fetch(URL_USERS)
  .then((response) => response.json())
  .then((data) => showData(data));

const cardPetition = document.getElementById("fetch-user-petition");
console.log(cardPetition);

function showData(data) {
  console.log(data);
  data.map((user, index) => {
    console.log("hola");
    cardPetition.innerHTML += `
      <tr>
        <th scope="row">${index}</th>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
      </tr>
    `;
  });
}
