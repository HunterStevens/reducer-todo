import React, {useReducer} from 'react';
import { TodoReducers, initialList } from '../reducers/reducers';



const TodoList = () =>{
    const [state,dispatch] = useReducer(TodoReducers, initialList)

    return(
        <div>
            {state.map(item=>{
                return(
                <div onClick ={() => dispatch({type:'COMPLETE_TASK'})}
                    className={`task${item.completed ? 'completed' : ''}`}>
                        <p>{item.item}</p>
                </div>
                )
            })}
        </div>
    );
}

export default TodoList;