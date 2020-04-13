import React from "react";

export const initialList = [
    {
        item: 'learn about reducers',
        completed: false,
        id: Date.now()
    }
]

export const TodoReducers = (state = inititalState, action) => {
    switch(action.type){
        

        default:
        return state;
    }
}