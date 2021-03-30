const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const gameRoutes = require('./routes/routes');

const app = express();
const pool = require('./db');

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

app.use('/api/games',gameRoutes);


app.get("/", (req, res) => {
  console.log('hereeeee')
    res.json('NBA GAMES SCORES');
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  const url = `http://localhost:${PORT}`
  console.log(`Server is running ${url}.`);
});

