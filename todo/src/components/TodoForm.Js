import React, {useReducer, useState} from 'react';
import { TodoReducers, initialList } from '../reducers/reducers';
import TodoList from './TodoList';


const TodoForm = () =>{
    const [state, dispatch] = useReducer(TodoReducers, initialList);
    const [taskInput, setTaskInput] = useState();

    const taskSubmit = event =>{
        event.preventDefault();
        console.log("add button triggered")
        const newTask = {
            item:taskInput,
            id:Date.now(),
            completed:false
        }

        dispatch({type:"ADD_TASK", payload:newTask});
        setTaskInput('');

    }

    const completeTask = item =>{

        dispatch({type:'COMPLETE_TASK', payload:item});
        console.log(item);
    }

    const clearCompleted = event =>{
        dispatch({type:"CLEAR_COMPLETED"});
    }

    const inputChange = event =>{
        event.preventDefault();
        setTaskInput(event.target.value);
    }

    return(
        <div>
        <form>
            <input type="text"
            value={taskInput}
            name="item"
            onChange={inputChange}
            />
            <button onClick={event => {taskSubmit(event)}}>Add ToDo</button>
            <button onClick ={() => {clearCompleted()}}>Clear Completed</button>
        </form>
        <div>
            {state.todos.map(todo=>{
                console.log(todo)
                return(
                <div key={todo.id} onClick ={() => completeTask(todo.id)}
                    className={`task${todo.completed ? 'completed' : ''}`}>
                        <p>{todo.item}</p>
                </div>
                )
            })}
        </div>
        </div>
    )
}
export default TodoForm;