import React from 'react';
import './App.css';

class AppClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            list:[],
        }
        this.removeListItem = this.removeListItem.bind(this);
    }
    removeListItem(item) {
        
            let toDoList =  this.state.list.filter((el, elIndex) => { return elIndex !== item})
        this.setState({toDoList})
    }  
    render() {
        return (
            <div>
                <h1>My To-Do List</h1>
                <Todo list={this.state.list} removeTask={this.removeTask} removeListItem={this.removeListItem}/>
            </div>
        )
    }
}


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            input: '',
            list: [],
            
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.clickToDo = this.clickToDo.bind(this)

    }
    // addCount = () => {
    //     this.setState(state => ({
    //         count: state.count +1
    //     }))
    // }
    // removeCount = () => {
    //     this.setState(state => ({
    //         count: state.count - 1
    //     }))
    // }
    addTodo(e){
        this.setState({
            input: e.target.value,
        })
    }
    clickToDo(e){
        e.preventDefault();
        this.setState(state => ({
            count: state.count + 1,
            list: [...state.list, state.input]
        }))
    }
    removeTask(e) {
        e.preventDefault();
        this.props.removeListItem(e)
        this.setState(state => ({
            count: state.count - 1,
            
        }))
    }
    render(){
        const { list } = this.state //destructuring this.state.list
        return(
            <>
            <h3 className='subtitle'>There are still {this.state.count} task to do</h3>
            <div className='input_form'>
                <input type='text' onChange={this.addTodo} value={this.state.input}/>
                <button className='add_button' onClick={this.clickToDo}>Add</button>
                    </div>
                <ul>
                    <div className='list_flex'>
                    {list.map((e) => (
                        <li key={e.toString()}>{e}</li>
                        ))}
                        {list.map(()=> (
                            <button className='done_button' onClick={this.removeTask}>Done</button>
                        ))}
                        {/* {this.props.list.map((list) => {
                                return <li onClick={() => {this.removeTask(list)}} key={list}>{ list }</li>
                            })} */}
                    </div>
                </ul>
            </>
        )
    }

} 




export default AppClass;