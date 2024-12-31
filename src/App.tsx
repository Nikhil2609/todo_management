import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import './App.css';
import TodoList from './pages/todo';
import { TodoItem } from './Interface';

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

 const handleChangeTodo = (todo: string) => {
    setTodo(todo)
  }

  const handleAddToDo = () => {
    if(!todo) return;
    const todoList = [...todos, {name: todo, status: "pending"}];
    setTodos(todoList);
    setTodo("")
  }

  const handleDeleteToDo = (todoItemId: number) => {
    const filterTodo = todos.filter((todo,index) => index !== todoItemId);
    setTodos(filterTodo);
  }

  const handleCompleteToDo = (todoItemId: number) => {
    const filterTodo = todos.map((todo,index) => {
      if(todoItemId === index) {
        todo.status = "completed"
      }
      return todo;
    });
    setTodos(filterTodo);
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        To-Do List
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            fullWidth
            placeholder="Add To Do Item"
            variant="outlined"
            value={todo}
            onChange={(e) => handleChangeTodo(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddToDo}
          > 
            Add
          </Button>
        </Grid>
      </Grid>

      {/* to-do listing */}
      <TodoList todos={todos} handleDeleteToDo={handleDeleteToDo} handleCompleteToDo={handleCompleteToDo}/>
    </Container>
  );
};

export default App;
