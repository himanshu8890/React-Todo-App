import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import uuid from "uuid";
// import axiox from "axios";
// import logo from './logo.svg';

import Todos from "./components/Todos";
import axios from "axios";

class App extends Component {
    appTitle = "Todo App";
    state = {
        todos: []
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(res => this.setState({todos: res.data}));
    }

    markComplete = id => { // console.log(id);
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };
    delTodo = id => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]

        }));
    };

    addTodo = title => {
        axios.post("https://jsonplaceholder.typicode.com/todos", {title, completed: false}).then(res => this.setState({
            todos: [
                ...this.state.todos,
                res.data
            ]
        }));
        // console.log(res => res.data);
    };

    render() {
        return (
            <Router>
                <div className="main-container">
                    <center>
                        <div className="container">
                            <Header></Header>
                            <Route exact path="/"
                                render={
                                    props => (
                                        <div>
                                            <AddTodo addTodo={
                                                this.addTodo
                                            }></AddTodo>
                                            <Todos todos={
                                                    this.state.todos
                                                }
                                                markComplete={
                                                    this.markComplete
                                                }
                                                delTodo={
                                                    this.delTodo
                                                }/>
                                        </div>
                                    )
                                }/>
                            <Route path="/about"
                                component={About}/>
                        </div>
                    </center>
                </div>
            </Router>
        );
    }
}

export default App;
