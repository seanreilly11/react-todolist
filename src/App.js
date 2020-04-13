import React, { useState } from "react";
import Todos from "./components/Todos";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Rubbish",
      completed: false,
    },
    {
      id: 2,
      title: "Dinner",
      completed: false,
    },
    {
      id: 3,
      title: "Learn react",
      completed: false,
    },
  ]);

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodo = (title) => {
    const id = title.length * 3;
    const newTodo = {
      id,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    console.log(todos);
  };

  return (
    <div className="App">
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos
        todos={todos}
        markComplete={markComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
