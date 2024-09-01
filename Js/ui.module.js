import Games from "./games.module.js";
import GamesDetails from "./details.module.js";
const gamesContainer = document.getElementById("rowData");
const categoryElements = document.querySelectorAll("li");
const gameDetailsContainer = document.getElementById("detailsContent");
const detailsSection = document.querySelector(".details");
const main = document.getElementById("main");
const mainHeader = document.getElementById("main-header");
export default function displayGamesData(games) {
  let gameCard = "";
  gamesContainer.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    let game = games[i];
    gameCard += `
      <div class="col-md-3 g-3 game-card" card-id="${game.id}">
        <div class="game-info">
          <img
            src="${game.thumbnail}"
            class="img-fluid w-100 rounded-1"
            alt="${game.title}"
          />
          <div class="game-info-content card-body">
            <div class="card-header d-flex justify-content-between mt-3 align-items-center">
              <p class="text-white ">${game.title
                .split(" ")
                .slice(0, 3)
                .join(" ")}</p>
              <span class="text-white">Free</span>
            </div>
            <p class="text-white mt-2 mb-2 text-center">
              ${game.short_description.split(" ").slice(0, 8).join(" ")}
            </p>
          </div>
          <div class="card-footer d-flex justify-content-between">
            <span class="text-white ">${game.genre}</span>
            <span class="text-white ">${game.platform}</span>
          </div>
        </div>
      </div>
    `;
  }

  gamesContainer.innerHTML = gameCard;

  const gameCards = document.querySelectorAll(".game-card");
  gameCards.forEach((gameCard) => {
    gameCard.addEventListener("click", function (e) {
      e.preventDefault();
      const cardId = gameCard.getAttribute("card-id");
      new GamesDetails().getGamesDetails(cardId);
      console.log("Details will display");
    });
  });
}
categoryElements.forEach((categoryElement) => {
  categoryElement.addEventListener("click", function (e) {
    e.preventDefault();
    const selectedCategory = e.target.textContent;
    new Games().getGamesData(selectedCategory);
  });
});

export function displayGameDetails(game) {
  // Prepare the game details HTML
  let gameDetails = `
    <div class="col-md-4">
      <img src="${game.thumbnail}" class="w-100" alt="image details"/>    
    </div>
    <div class="col-md-8">
      <h3 class="text-white">${game.title}</h3>
      <p class="text-white">Category: <span class="badge text-bg-info"> ${game.genre}</span></p>
      <p class="text-white">Platform: <span class="badge text-bg-info"> ${game.platform}</span></p>
      <p class="text-white">Status: <span class="badge text-bg-info"> ${game.status}</span></p>
      <p class="small text-white">
        ${game.description}
      </p>
      <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
    </div>
  `;

  // Update the details content container
  gameDetailsContainer.innerHTML = gameDetails;

  // Show the details section
  detailsSection.classList.remove("d-none");
  detailsSection.classList.add("d-block");
  main.classList.add("d-none");
  main.classList.remove("d-block");
  mainHeader.classList.add("d-none");
  mainHeader.classList.remove("d-block")
}

// Add functionality to close the details section
document.getElementById("btnClose").addEventListener("click", function () {
  const detailsSection = document.querySelector(".details");
  detailsSection.classList.remove("d-block");
  detailsSection.classList.add("d-none");
  main.classList.add("d-block");
  main.classList.remove("d-none");
  mainHeader.classList.remove("d-none");
  mainHeader.classList.add("d-block");
});
