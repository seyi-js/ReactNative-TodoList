/* eslint-disable prettier/prettier */
import { DELETE_TODO, ADD_TODO } from './Types'


export const deleteTodo = ( id ) =>  {
    // console.log(id)
    return ( {
        type: DELETE_TODO,
        payload: id
    })
}

export const addTodo = ( newTodo ) => {
    return ( {
        type: ADD_TODO,
        payload: newTodo
    })
}
