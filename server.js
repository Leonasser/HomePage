'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 1337;

// Middleware para servir arquivos estáticos
app.use(express.static('Resources'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Resources/Index/Index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
