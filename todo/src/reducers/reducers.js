import React from "react"; 

export const initialList = [
    {
        item: 'learn about reducers',
        completed: false,
        id: Date.now()
    }
]

export function TodoReducers(initialList, action){
    switch(action.type){
        case"ADD_TASK":
            console.log("ADD_TASK Reducer", action.payload)
            return{
                ...initialList,
                item:action.payload
            }

        case"CLEAR_COMPLETED":
            return{

            }
        case"COMPLETE_TASK":
            return{

            }

        default:
        return initialList;
    }
}