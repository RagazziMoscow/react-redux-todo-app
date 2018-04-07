const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 8080;

app.use('/', express.static(path.join(__dirname, '../public')));

app.post('/todos', (req, res) => {
    const todos = require('./models');
    res.json(todos);
});

app.listen(port, () => {
    console.log(`Сервер работает на порту ${port}...`);
});