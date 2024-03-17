const express = require('express');
const server = express();
require('dotenv').config();
require('./mongoDB.js');
const PORT = process.env.PORT || 8080;
const userRoutes = require('./Routes/UserRoute');
server.use(express.json());

server.get('/', (req, res) => {
    res.send('products api running new deploy');
});

server.get('/ping', (req, res) => {
    res.send('PONG')
});

// users
server.use('/user', userRoutes);

server.listen(8080, () => {
    console.log('Server is listenin on PORT :' + PORT);
})