import React, {useReducer} from 'react';
import { TodoReducers, initialList } from '../reducers/reducers';

const TodoForm = props =>{
    const [state, dispatch] = useReducer(TodoReducers, initialList);

    return(
        <form>
            <input type="text"
            value={props.taskInput}
            naem="taskInput"
            onChange={props.inputChange}
            />
            <button onClick={dispatch({type:"ADD_TASK"})}>Add ToDo</button>
            <button onClick ={dispatch({type:"CLEAR_COMPLETED"})}>Clear Completed</button>
        </form>
    )
}
export default TodoForm;