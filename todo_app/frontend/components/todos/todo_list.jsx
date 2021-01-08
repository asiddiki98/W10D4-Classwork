import React from "react";
import TodoListItem from '../todo_list/todo_list_item'
import TodoForm from '../todo_list/todo_form'

export default (props) => {
  const todoItems = props.todos.map((todo, idx) => {
      return (
        <TodoListItem todo={todo} key={idx}/>
      )
  });

  return (
    <div>
      <ul>
        { todoItems }
      </ul>
      <TodoForm receiveTodo={props.receiveTodo}/>
    </div>
  )
};
