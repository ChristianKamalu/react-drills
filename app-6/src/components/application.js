import React, {Component} from 'react'
import Todo from './todo'

export default class Application extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            newTask: ''
        }
    }

    handleUserInput = (task) => {
        this.setState({
            newTask: task
        })
    }

    addTask = () => {
        this.setState({
            tasks: [...this.state.tasks, this.state.newTask],
            newTask: ''
        })
    }

    render(){
        let tasks = this.state.tasks.map((task, i) => {
            return <Todo key={i} task = {task} />;
        })
        return(
            <div>
                <div>
                    <h1>My to-do list</h1>
                    <input onChange={(e) => this.handleUserInput(e.target.value)} value = {this.state.newTask} placeholder = 'enter new task'/>
                    <button onClick={() => this.addTask()}>Add</button>
                </div>
                <br/>
                {tasks}                
            </div>
        )
    }
}