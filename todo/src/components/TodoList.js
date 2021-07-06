import React, {useReducer} from 'react';
import { TodoReducers, initialList } from '../reducers/reducers';
import TodoForm from './TodoForm';



const TodoList = () =>{
    const [state,dispatch] = useReducer(TodoReducers, initialList)

    return(
        <div>
            {state.todos.map(todo=>{
                return(
                <div key={todo.id} onClick ={() => dispatch({type:'COMPLETE_TASK'})}
                    className={`task${todo.completed ? 'completed' : ''}`}>
                        <p>{todo.item}</p>
                </div>
                )
            })}
        </div>
        
    );
}

export default TodoList;