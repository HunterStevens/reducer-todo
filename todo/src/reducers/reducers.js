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
        

        default:
        return initialList;
    }
}