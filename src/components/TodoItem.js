import React, {Component} from "react";
import PropTypes from "prop-types";
export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "5px",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
            borderBottom: "1px #ccc dotted",
            color: this.props.todo.completed ? "#ff0000" : ""
        };
    };

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={
                this.getStyle()
            }>
                <p>
                    <input type="checkbox"
                        id={id}
                        onChange={
                            this.props.markComplete.bind(this, id)
                    }></input>
                    {title}
                    <button style={delTodo}
                        onClick={
                            this.props.delTodo.bind(this, id)
                    }>
                        X
                    </button>
                </p>
            </div>
        );
    }
} TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};
const delTodo = {
    background: "#ff0000",
    color: "#fff",
    padding: "5px 8px",
    border: "none",
    borderRadius: "10%",
    float: "right"
};

export default TodoItem;
