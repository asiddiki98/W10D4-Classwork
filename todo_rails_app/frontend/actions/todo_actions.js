import * as APIUtil from '../util/todo_api_util'

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";


export const receiveTodos = (todos) => {
  debugger
  return {
    type: RECEIVE_TODOS,
    todos: todos,
  };
};

export const receiveTodo = (todo) => {
  return {
    type: RECEIVE_TODO,
    todo: todo,
  };
};


export const fetchTodos = () => {
  return dispatch => {
    return APIUtil.fetchTodos().then( allTodos =>{
      return dispatch(receiveTodos(allTodos))
    })
  }
}
