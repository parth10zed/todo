import "./App.css";
import Footer from "./Componates/Footer";
import Navbar from "./Componates/Navbar";
import Todos from "./Componates/Todos";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
    console.log("Empty Log");
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
    console.log("asdfaasf");
  }

  const onDelete = (todoi) => {
    settodo(
      todo.filter((e) => {
        return e !== todoi;
      })
    );

    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const addTodo = (title, desc) => {
    let sno;
    if (todo.length === 0) {
      sno = 1;
    } else {
      sno = todo[todo.length - 1].id + 1;
    }
    const mytodo = {
      id: sno,
      note: title,
      descc: desc,
    };

    console.log("Data is", mytodo);

    settodo([...todo, mytodo]);
  };

  const [todo, settodo] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<Footer />}></Route>
        <Route
          path="/"
          element={<Todos addTodo={addTodo} todo={todo} onDelete={onDelete} />}
        >
          {" "}
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
