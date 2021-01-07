import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions'

const todosReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        default: 
            return state;
    }
}




export default todosReducer;