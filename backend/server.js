const express = require('express');
// require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');
const gameRoutes = require('./routes/routes');

const app = express();
const pool = require('./db');

app.use(bodyParser.json());

app.use('/games',gameRoutes);


app.get("/", (req, res) => {
  console.log('hereeeee')
    res.json('NBA GAMES SCORES');
  });

//   const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

app.listen(5000);

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'mysql09',
//   database: 'react-express-sql-app'
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });