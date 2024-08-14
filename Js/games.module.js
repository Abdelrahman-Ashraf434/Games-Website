import displayGamesData from "./Ui.module.js";
class Games {
  async getGamesData(category) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "219556e9demsh5e76c4033d4fa4ep19be61jsn29de46d9c321",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      let response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
        options
      );
      const games = await response.json();
      displayGamesData(games);
    } catch (error) {
      console.log(error);
    }
  }
}
export default Games;
