CREATE DATABASE nba_database;

CREATE TABLE nba_scores(
    team_id SERIAL PRIMARY KEY,
    date_game DATE NOT NULL,
    home_team VARCHAR (100) NOT NULL,
    home_team_city VARCHAR (100) NOT NULL,
    home_team_score INT NOT NULL,
    season INT NOT NULL,
    status_game VARCHAR (100) NOT NULL,
    visitor_team VARCHAR(100) NOT NULL,
    visitor_team_score INT NOT NULL
);
    