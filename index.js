const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const cors = require("cors"); // Import the 'cors' package

app.use(cors());

app.use(express.json());

const tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.json(task);
});

app.put("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const updatedTask = req.body;
  tasks[id] = updatedTask;
  res.json(updatedTask);
});

app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  tasks.splice(id, 1);
  res.json({ message: "Task deleted" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
