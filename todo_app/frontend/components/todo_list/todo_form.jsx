import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field){
        return (e) =>{
            this.setState({ [field]: e.target.value })
        }
    }


    handleSubmit(e){
        e.preventDefault();
        this.props.receiveTodo(this.state)
        this.setState({
            title: '',
            body: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Title: 
                        <input type="text" onChange={this.update("title")} value={this.state.title}/>
                    </label>
                    <label>Body: 
                        <input type="text" onChange={this.update("body")} value={this.state.body}/>
                    </label>
                    <button>Create Todo</button>
                </form>
            </div>
        )
    }

}

export default TodoForm