function thunk(store) {
    // debugger
    return function (next) { // until this line, will be invoked during the setup
        // debugger
        return function (action) { //from this line, this function will be used repeatedly
            // you need action to invoke this function
            // debugger

            if (typeof action === "function") { //this means the action is thunk action creator, not a regular POJO action
                // debugger
                return action(store.dispatch, store.getState);
                //this action holds ajax request and we need to pass down the functionalities to interact with your store. 
            }
            // debugger
            return next(action); // if you hit this line, the action is POJO
            // you can think of next as whatever in the next line
        };
    };
}


export default thunk;


// const thunkFatArrow = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(store.dispatch, store.getState);
//   }
//   return next(action);
// };