const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let todos = [];

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.post('/todos', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});