import React from 'react';
import './App.css';

class AppClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            input: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }
    addTask = () => {
        this.setState(state =>({
            tasks: [...state.tasks, state.input],
            input: ''
        }))
    }
    removeTask = (event) => {
        const index = event.target.dataset.index;
        this.setState(state => {
            const tasks = [...state.tasks];
            tasks.splice(index, 1);
            return { tasks: tasks}
        })
    }
    render() {
        return (
            <div>
                <h1>Task</h1>
                <h3>You have {this.state.tasks.length} {this.state.tasks.length <= 1 ? 'task' : 'tasks'}</h3>
                <ul>
                   {this.state.tasks.map((task, i) => (
                       <li key={i}>
                           {task}
                           <button className='done_button' data-index={i} onClick={this.removeTask}>Done</button>
                       </li>
                   ))}
                </ul>
                <div className='input_form'>

                <input value={this.state.input} onChange={this.handleChange}/>
                <button className='add_button' onClick={this.addTask}>Add</button>
                </div>
            </div>
        );
    }
}


export default AppClass;