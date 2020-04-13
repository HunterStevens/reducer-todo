import React, {useReducer} from 'react';
import { TodoReducers, initialList } from '../reducers/reducers';



const TodoList = () =>{
    const [state,dispatch] = useReducer(TodoReducers, initialList)

    return(
        <div>
            {state.map(todo=>{
                return(
                <div onClick ={() => dispatch({type:'COMPLETE_TASK'})}
                    className={`task${todo.completed ? 'completed' : ''}`}>
                        <p>{todo.item}</p>
                </div>
                )
            })}
        </div>
    );
}

export default TodoList;