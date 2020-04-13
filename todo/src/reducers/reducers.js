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

            }
        case"COMPLETE_TASK":
            return{

            }

        default:
        return state;
    }
}