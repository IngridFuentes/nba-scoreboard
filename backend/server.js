const express = require('express');
// require('dotenv').config();
const bodyParser = require('body-parser');
// const cors = require("cors");
const gameRoutes = require('./routes/routes')

const app = express();

// var corsOptions = {
//   origin: "http://localhost:5001"
// };

app.use('/games',gameRoutes);
// app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to an NBA application." });
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