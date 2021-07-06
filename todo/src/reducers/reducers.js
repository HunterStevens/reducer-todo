export const initialList = {
    todos:[
    {
        item: 'learn about reducers',
        completed: false,
        id: Date.now(),
    }
    ]
}

export function TodoReducers(state = initialList, action){
    switch(action.type){
        case"ADD_TASK":
            console.log("ADD_TASK Reducer", action.payload, state)
            return{
                ...state,
                todos:[...state.todos, action.payload]
            }

        case"CLEAR_COMPLETED":
            return{
                ...state,
                todos:state.todos.filter(item => !item.completed)
            }
        case"COMPLETE_TASK":
            return{
                ...state,
                todos:state.todos.map(item =>{
                    if(action.payload == item.id){
                        return{
                            ...item,
                            completed:!item.completed
                        }
                    }
                    else{
                        return {
                            ...item
                        }
                    }
                })
            }

        default:
        return state;
    }
}