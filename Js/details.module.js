export default async function getGamesDetails(id) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "219556e9demsh5e76c4033d4fa4ep19be61jsn29de46d9c321",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
