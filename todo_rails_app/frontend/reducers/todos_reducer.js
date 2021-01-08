import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";

// const initialState = {
//   1: {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false,
//   },
//   2: {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true,
//   },
// };

// const initialState = [
//   {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false,
//   },
//   {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true,
//   },
// ];

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_TODOS:
      const newTodos = {};
      action.todos.forEach((el) => (newTodos[el.id] = el));
      newState = Object.assign({}, newTodos);
      return newState;
    case RECEIVE_TODO:
      const newTodo = { [action.todo.id]: action.todo };
      newState = Object.assign({}, state, newTodo);
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
