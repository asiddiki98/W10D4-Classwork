import { ReactReduxContext } from "react-redux";
import { combineReducers } from "redux";
import TodosRededucer from "./todos_reducer";

const rootReducer = combineReducers({
  todos: TodosRededucer,
});

export default rootReducer;
