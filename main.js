function createGame(player1, hour, player2, estadio) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
    <strong><span class="estadio">${estadio}<br></span>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="${player2}">
  </li>

  `
}

function createCard(date, day, games) {
  return `
    <div class="cards">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
  </div>  
  `
}

document.querySelector("#app").innerHTML = `
<header>
    <img src="./assets/logo.svg" alt="Logo da NWL">
</header>
<main id="cards">
  ${createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia","Lusail Stadium"))}
  ${createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland","Stadium 974"))}
  ${createCard("02/12", "sexta", createGame("cameroon", "16:00", "brazil","Lusail"))}
</main>
`