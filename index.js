const express = require('express');
const path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, './public')))

// app.get('/', (req, res) => {
//     // res.send('hello from the web server side..')
//     res.sendFile(path.join(__dirname, './public/index.html'))
// });

// app.get('/css/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname, './public/css/styles.css'))
// });
app.listen(3000)