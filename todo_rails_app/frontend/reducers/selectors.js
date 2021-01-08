



const allTodos = (state) => {
    // let allKeys = Object.keys(state.todos)
    // return allKeys.map((id,idx) =>{
    //     return (
    //         state.todos[id]
    //     )
    // })
    return Object.values(state.todos)

}

export default allTodos