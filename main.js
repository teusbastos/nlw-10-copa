function createGame(player1, hour, player2, estadio) {
  return `
  <li>
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
<header>
    <img src="./assets/logo.svg" alt="Logo da NWL">
</header>
<main id="cards">
      
  ${createCard(
    "20/11",
    "domingo",
    createGame("catar", "13:00", "equador", estadio(5) /*group a*/)
  )}
  ${createCard(
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", "irã", estadio(1) /*group b*/) +
      createGame("senegal", "13:00", "holanda", estadio(2) /*group a*/) +
      createGame("estados unidos", "16:00", "gales", estadio(5) /*group b*/)
  )}
  ${createCard(
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arábia saudita", estadio(0) /*group c*/) +
      createGame("dinamarca", "10:00", "tunísia", estadio(7) /*group d*/) +
      createGame("méxico", "13:00", "polônia", estadio(6) /*group c*/) +
      createGame("frança", "16:00", "austrália", estadio(3) /*group d*/)
  )}
  ${createCard(
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croácia", estadio(4) /*group f*/) +
      createGame("alemanha", "10:00", "japão", estadio(1) /*group e*/) +
      createGame("espanha", "13:00", "costa rica", estadio(2) /*group e*/) +
      createGame("bélgica", "16:00", "canadá", estadio(5)/*group f*/)
  )}
  ${createCard(
    "24/11",
    "quinta",
    createGame("suíça", "07:00", "camarões", estadio(3) /*group g*/) +
      createGame(
        "uruguai",
        "10:00",
        "coreia do sul",
        estadio(7) /*group h*/
      ) +
      createGame("portugal", "13:00", "gana", estadio(6) /*group h*/) +
      createGame("brasil", "16:00", "sérvia", estadio(0) /*group g*/)
  )}
  ${createCard(
    "25/11",
    "sexta",
    createGame("gales", "07:00", "irã", estadio(5) /*group b*/) +
      createGame(
        "catar",
        "10:00",
        "senegal",
        estadio(2) /*group a*/
      ) +
      createGame(
        "holanda",
        "13:00",
        "equador",
        estadio(1) /*group a*/
      ) +
      createGame(
        "inglaterra",
        "16:00",
        "estados unidos",
        estadio(4) /*group b*/
      )
  )}
  ${createCard(
    "26/11",
    "sábado",
    createGame(
      "tunísia",
      "07:00",
      "austrália",
      estadio(3) /*group d*/
    ) +
      createGame(
        "polônia",
        "10:00",
        "arábia saudita",
        estadio(7) /*group c*/
      ) +
      createGame("frança", "13:00", "dinamarca", estadio(6) /*group d*/) +
      createGame("argentina", "16:00", "méxico", estadio(0) /*group c*/)
  )}

  ${createCard(
    "27/11",
    "domingo",
    createGame(
      "japão",
      "07:00",
      "costa rica",
      estadio(5) /*group e*/
    ) +
      createGame(
        "bélgica",
        "10:00",
        "marrocos",
        estadio(2) /*group f*/
      ) +
      createGame(
        "croácia",
        "13:00",
        "canadá",
        estadio(1) /*group f*/
      ) +
      createGame("espanha", "16:00", "alemanha", estadio(4) /*group e*/)
  )}
  ${createCard(
    "28/11",
    "segunda",
    createGame("camarões", "07:00", "sérvia", estadio(3) /*group g*/) +
      createGame(
        "coreia do sul",
        "10:00",
        "gana",
        estadio(7) /*group h*/
      ) +
      createGame("brasil", "13:00", "suíça",estadio(6) /*group g*/) +
      createGame("portugal", "16:00", "uruguai",estadio(0) /*group h*/)
  )}
  ${createCard(
    "29/11",
    "terça",
    createGame("equador", "07:00", "senegal",estadio(1) /*group a*/) +
      createGame("holanda", "10:00", "catar",estadio(4) /*group a*/) +
      createGame("irã", "13:00", "estados unidos",estadio(2) /*group b*/) +
      createGame("gales", "16:00", "inglaterra",estadio(5) /*group b*/)
  )}
  ${createCard(
    "30/11",
    "quarta",
    createGame("tunísia", "07:00", "frança",estadio(7) /*group d*/) +
      createGame("austrália", "10:00", "dinamarca",estadio(3) /*group d*/) +
      createGame("polônia", "13:00", "argentina",estadio(6) /*group c*/) +
      createGame("arábia saudita", "16:00", "méxico",estadio(0) /*group c*/)
  )}
  ${createCard(
    "01/11",
    "quinta",
    createGame("croácia", "07:00", "bélgica",estadio(5) /*group f*/) +
      createGame("canadá", "10:00", "marrocos",estadio(2) /*group f*/) +
      createGame("japão", "13:00", "espanha",estadio(1) /*group e*/) +
      createGame("costa rica", "16:00", "alemanha",estadio(4) /*group e*/)
  )}
  ${createCard(
    "02/12",
    "sexta",
    createGame(
      "coreia do sul",
      "07:00",
      "portugal",
      estadio(7)/*group h*/
    ) +
      createGame("gana", "10:00", "uruguai",estadio(3) /*group h*/) +
      createGame("sérvia", "13:00", "suíça",estadio(6) /*group g*/) +
      createGame("camarões", "16:00", "brasil",estadio(0) /*group g*/)
  )}
</main>
`
