import React, {Component} from 'react'
import "../App.css";

const btnName = "Add New Todo Item";
export class AddTodo extends Component {
    state = {
        title: ""
    }
    onChange = (e) => this.setState({title: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title.length) {
            this.props.addTodo(this.state.title);
            this.setState({title: ""});
        }
    }
    render() {
        return (
            <form onSubmit={
                this.onSubmit
            }>
                <input onChange={
                        this.onChange
                    }
                    className="inputTodo"
                    name="title"
                    placeholder="Add todo item here..."
                    value={
                        this.state.title
                    }
                    type="text"></input>
                <input type="submit" className="todoAdd"
                    value={btnName}/>
            </form>
        )
    }
}

export default AddTodo
