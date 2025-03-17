const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Todo = require('./models/todo.model');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect("")
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to Database & app listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Get all todos (GET)
app.get('/todo', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).send(todos);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific todo by ID (GET)
app.get('/todo/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).send({ message: 'Todo not found' });
    }
    res.status(200).send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create a new todo (POST)
app.post('/todo/add', async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const todo = await Todo.create({ title, description, status });
    res.status(200).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
});


// Update an existing todo (PUT)
app.put('/todo/update/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, status },
      { new: true } // return the updated document
    );
    if (!updatedTodo) {
      return res.status(404).send({ message: 'Todo not found' });
    }
    res.status(200).send(updatedTodo);
  } catch (error) {
    res.status(400).send(error);
  }
});


// Delete a todo (DELETE)
app.delete('/todo/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).send({ message: 'Todo not found' });
    }
    res.status(200).send({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});
