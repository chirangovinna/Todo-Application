const express = require('express');
const mongoose = require('mongoose');
const todoController = require('./todo.controller');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/todo_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// Routes
app.get('/todos', todoController.getTodos);
app.post('/todos', todoController.createTodo);
app.get('/todos/:id', todoController.getTodoById);
app.put('/todos/:id', todoController.updateTodo);
app.delete('/todos/:id', todoController.deleteTodo);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
