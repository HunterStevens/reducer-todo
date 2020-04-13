import React, {useReducer, useState} from 'react';
import { TodoReducers, initialList } from '../reducers/reducers';


const TodoForm = () =>{
    const [state, dispatch] = useReducer(TodoReducers, initialList);
    const [taskInput, setTaskInput] = useState("");

    const taskSubmit = event =>{
        console.log("add button triggered")
        const newTask = {
            item:taskInput,
            id:Date.now(),
            complete:false
        }

        dispatch({type:"ADD_TASK", payload:newTask});
        setTaskInput('');

    }

    const clearCompleted = event =>{
        dispatch({type:"CLEAR_COMPLETED"});
    }

    const inputChange = event =>{
        event.preventDefault();
        setTaskInput(event.target.value);
    }

    return(
        <form>
            <input type="text"
            value={taskInput.item}
            name="item"
            onChange={inputChange}
            />
            <button onClick={() => {taskSubmit()}}>Add ToDo</button>
            <button onClick ={() => {clearCompleted()}}>Clear Completed</button>
        </form>
    )
}
export default TodoForm;