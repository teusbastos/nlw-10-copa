function createGame(player1, hour, player2, estadio, grupo) {
  return `
  <li class="${grupo}">
    <div class="flagLeft">
    <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
    <figcaption class="teamName">${player1}</figcaption>
    </div>
    <strong><span class="estadio">${estadio}<br></span>${hour}</strong>
    <div class="flagRight">
    <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
    <figcaption class="teamName">${player2}</figcaption>
    </div>
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

function estadio(numero) {
  switch (numero) {
    case 0:
      return "Estádio Lusail"
    case 1:
      return "Estádio Khalifa"
    case 2:
      return "Estádio Al-Thumama"
    case 3:
      return "Estádio Al-Janoub"
    case 4:
      return "Estádio Al-Bayt"
    case 5:
      return "Estádio Ahmed Bin Ali"
    case 6:
      return "Estádio 974"
    case 7:
      return "Estádio da Cidade da Educação"
  }
}

document.querySelector("#app").innerHTML = `
<main id="cards">
  ${createCard(
    "20/11",
    "domingo",
    createGame("catar", "13:00", "equador", estadio(5), "cgrupoa")
  )}
  ${createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", "irã", estadio(1), "cgrupob") +
      createGame("senegal", "13:00", "holanda", estadio(2), "cgrupoa") +
      createGame("estados unidos", "16:00", "gales", estadio(5), "cgrupob")
  )}
  ${createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arábia saudita", estadio(0), "cgrupoc") +
      createGame("dinamarca", "10:00", "tunísia", estadio(7), "cgrupod") +
      createGame("méxico", "13:00", "polônia", estadio(6), "cgrupoc") +
      createGame("frança", "16:00", "austrália", estadio(3), "cgrupod")
  )}
  ${createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croácia", estadio(4), "cgrupof") +
      createGame("alemanha", "10:00", "japão", estadio(1), "cgrupoe") +
      createGame("espanha", "13:00", "costa rica", estadio(2), "cgrupoe") +
      createGame("bélgica", "16:00", "canadá", estadio(5), "cgrupof")
  )}
  ${createCard(
    "24/11",
    "quinta",
    createGame("suíça", "07:00", "camarões", estadio(3), "cgrupog") +
      createGame("uruguai", "10:00", "coreia do sul", estadio(7), "cgrupoh") +
      createGame("portugal", "13:00", "gana", estadio(6), "cgrupoh") +
      createGame("brasil", "16:00", "sérvia", estadio(0), "cgrupog")
  )}
  ${createCard(
    "25/11",
    "sexta",
    createGame("gales", "07:00", "irã", estadio(5), "cgrupob") +
      createGame("catar", "10:00", "senegal", estadio(2), "cgrupoa") +
      createGame("holanda", "13:00", "equador", estadio(1), "cgrupoa") +
      createGame("inglaterra", "16:00", "estados unidos", estadio(4), "cgrupob")
  )}
  ${createCard(
    "26/11",
    "sábado",
    createGame("tunísia", "07:00", "austrália", estadio(3), "cgrupod") +
      createGame("polônia", "10:00", "arábia saudita", estadio(7), "cgrupoc") +
      createGame("frança", "13:00", "dinamarca", estadio(6), "cgrupod") +
      createGame("argentina", "16:00", "méxico", estadio(0), "cgrupoc")
  )}

  ${createCard(
    "27/11",
    "domingo",
    createGame("japão", "07:00", "costa rica", estadio(5), "cgrupoe") +
      createGame("bélgica", "10:00", "marrocos", estadio(2), "cgrupof") +
      createGame("croácia", "13:00", "canadá", estadio(1), "cgrupof") +
      createGame("espanha", "16:00", "alemanha", estadio(4), "cgrupoe")
  )}
  ${createCard(
    "28/11",
    "segunda",
    createGame("camarões", "07:00", "sérvia", estadio(3), "cgrupog") +
      createGame("coreia do sul", "10:00", "gana", estadio(7), "cgrupoh") +
      createGame("brasil", "13:00", "suíça", estadio(6), "cgrupog") +
      createGame("portugal", "16:00", "uruguai", estadio(0), "cgrupoh")
  )}
  ${createCard(
    "29/11",
    "terça",
    createGame("equador", "07:00", "senegal", estadio(1), "cgrupoa") +
      createGame("holanda", "10:00", "catar", estadio(4), "cgrupoa") +
      createGame("irã", "13:00", "estados unidos", estadio(2), "cgrupob") +
      createGame("gales", "16:00", "inglaterra", estadio(5), "cgrupob")
  )}
  ${createCard(
    "30/11",
    "quarta",
    createGame("tunísia", "07:00", "frança", estadio(7), "cgrupod") +
      createGame("austrália", "10:00", "dinamarca", estadio(3), "cgrupod") +
      createGame("polônia", "13:00", "argentina", estadio(6), "cgrupoc") +
      createGame("arábia saudita", "16:00", "méxico", estadio(0), "cgrupoc")
  )}
  ${createCard(
    "01/11",
    "quinta",
    createGame("croácia", "07:00", "bélgica", estadio(5), "cgrupof") +
      createGame("canadá", "10:00", "marrocos", estadio(2), "cgrupof") +
      createGame("japão", "13:00", "espanha", estadio(1), "cgrupoe") +
      createGame("costa rica", "16:00", "alemanha", estadio(4), "cgrupoe")
  )}
  ${createCard(
    "02/12",
    "sexta",
    createGame("coreia do sul", "07:00", "portugal", estadio(7), "cgrupoh") +
      createGame("gana", "10:00", "uruguai", estadio(3), "cgrupoh") +
      createGame("sérvia", "13:00", "suíça", estadio(6), "cgrupog") +
      createGame("camarões", "16:00", "brasil", estadio(0), "cgrupog")
  )}
</main>
`