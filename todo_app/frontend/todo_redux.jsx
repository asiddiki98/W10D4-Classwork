import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import ToDosReducer from "./reducers/todos_reducer";
import { receiveTodos, receiveTodo } from "./actions/todo_actions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  window.store = store;
  window.ToDosReducer = ToDosReducer;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;

  ReactDOM.render(<h1>Todos App</h1>, root);
});
