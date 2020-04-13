import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const TodoItem = ({ todo, markComplete, deleteTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <h4>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={markComplete.bind(this, todo.id)}
        />{" "}
        {todo.title}
        <button className="deleteBtn" onClick={deleteTodo.bind(this, todo.id)}>
          X
        </button>
      </h4>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;
