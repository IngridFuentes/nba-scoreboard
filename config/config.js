
const axios = require('axios');

const API_KEY = "07fcfc2a14msh021e912175b88e5p118160jsnd0c64aac64ae";

async function getGamesScores(games) {

    const response = await axios.get('https://free-nba.p.rapidapi.com/games');

    const data = response.data;

    const scores = data.results;

    return scores;

}

module.exports = getGamesScores;