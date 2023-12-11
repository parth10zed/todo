import React, { useState } from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const addnotes = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title and Descrption not empty!")
    }
    else {
      props.addTodo(title, desc)
      setTitle("")
      setDesc("")
    }

  }
  return (
    <div className="container my-3">
      <h3 className=" my-3">Add Todo</h3>
      <form onSubmit={addnotes}>
        <div class="mb-3">
          <label htmlFor="title" class="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            class="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label htmlFor="desc" class="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            class="form-control"
            id="desc"
          />
        </div>

        <button type="submit" class="btn btn-sm btn-success">
          Submit
        </button>
      </form>
      <h3 className="my-3">Todo List</h3>
      {props.todo.length === 0 || props.todo.length === null
        ? "Empaty Todo List"
        : props.todo.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete} /><hr />
            </>
          );
        })}
    </div>
  );
};

export default Todos;
