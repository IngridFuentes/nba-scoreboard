const getGamesScores = require('../config/config');
const unirest = require("unirest");

function getScore(req, result) {

    var unirest = require("unirest");
    var req = unirest("GET", "https://free-nba.p.rapidapi.com/games");


    req.headers({
        "x-rapidapi-key": "07fcfc2a14msh021e912175b88e5p118160jsnd0c64aac64ae",
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
    });


    req.end(function (res) {
        if (res.error) throw new Error(res.error);

        console.log(res.body);

        if(res.status == 200) {
            let scores = [];
            
            let gamesArray = res.body;
            let allData = gamesArray.data;

            allData.forEach( data => {
                let date = data.date;
                let homeTeam = data.home_team.full_name;
                let homeTeamCity = data.home_team.city;
                let homeTeamScore = data.home_team_score;
                let season = data.season;
                let status = data.status;
                let visitorTeam = data.visitor_team.full_name;
                let visitorTeamScore = data.visitor_team_score;

                let allGames = {
                    date,
                    homeTeam,
                    homeTeamCity,
                    homeTeamScore,
                    season,
                    status,
                    visitorTeam,
                    visitorTeamScore
                }
                scores.push(allGames);
            });
            return result.json(scores);
        }
    });

}

module.exports = getScore;