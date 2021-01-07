import { connect } from 'react-redux'
import todoList from './todo_list'
import allTodos from '../../reducers/selectors'
import { receiveTodo } from '../../actions/todo_actions'

const mapStateToProps = (state) => {
    return {
        todos: allTodos(state)
    }
}

const mapDispatchToProps = (dp) => {
    return {
        receiveTodo: (todo) => {
            dp(receiveTodo(todo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList)