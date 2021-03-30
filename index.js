// const express = require('express')
// const app = express()
// const port = 3001

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

const http = require('http');
const server = http.createServer((req, res) => {
    console.log('Incoming req');
    console.log(req.method, req.url);
    

    res.end('Success!');

})

server.listen(5000);