import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    setTitle(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitTodo} style={{ display: "flex", padding: "0 .5rem" }}>
      <input
        className="input"
        type="text"
        name="title"
        placeholder="Add todo..."
        onChange={handleInput}
        value={title}
      />
      <input className="btn" type="submit" value="Add Todo" />
    </form>
  );
};

export default AddTodo;
