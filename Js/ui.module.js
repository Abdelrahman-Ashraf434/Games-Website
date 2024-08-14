import Games from "./games.module.js";

const gamesContainer = document.getElementById("rowData");
const categoryElements = document.querySelectorAll("li");
export default function displayGamesData(games) {
  let gameCard = ""; 
  gamesContainer.innerHTML = ""; 

  for (let i = 0; i < games.length; i++) {
    let game = games[i];
    gameCard += `
      <div class="col-md-3 g-3">
        <div class="game-info">
          <img
            src="${game.thumbnail}"
            class="img-fluid w-100 rounded-1"
            alt=""
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
              ${game.short_description.split(" ").slice(0,8).join(" ")}
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
}
categoryElements.forEach((categoryElement) => {
  categoryElement.addEventListener("click", function (e) {
    e.preventDefault();
    const selectedCategory = e.target.textContent;
    new Games().getGamesData(selectedCategory);
  });
});
