import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import "../App.css";

const Todos = ({ todos, markComplete, deleteTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          markComplete={markComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
