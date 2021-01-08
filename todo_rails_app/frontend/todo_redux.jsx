import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import ToDosReducer from "./reducers/todos_reducer";
import { receiveTodos, receiveTodo, fetchTodos } from "./actions/todo_actions";
import Root from './components/root'
import allTodos from './reducers/selectors'



document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  window.store = store;
  window.ToDosReducer = ToDosReducer;
  window.receiveTodos = receiveTodos;
  window.receiveTodo = receiveTodo;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;

  ReactDOM.render(<Root store={store} />, root);
});
