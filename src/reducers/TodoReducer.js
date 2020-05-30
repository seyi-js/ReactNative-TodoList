/* eslint-disable prettier/prettier */
import { DELETE_TODO, ADD_TODO, EDIT_TODO, GET_TODOS } from '../actions/Types'

const initialState = {
    todos: [
        {
            id: 29,
            text: 'Get Assignment'
        },
        {
            id: 59,
            text: 'Get Some Books'
        },
        {
            id: 9,
            text: 'Get Some food'
        },
        {
            id: 69,
            text: 'Buy name'
        },
        {
            id: 79,
            text: 'Go home'
        },
        {
            id: 89,
            text: 'Learn C#'
        },
        {
            id: 19,
            text: 'Learn Python'
        },
    ],

    selectedTodo: null
}


export default ( state = initialState, action ) => {
    
    switch ( action.type ) {
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter( todo => todo.id !== action.payload )
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [ action.payload, ...state.todos ]
            };
        case GET_TODOS:
            return {
                ...state,
                todos: action.payload
            };
        case EDIT_TODO:
            return {
                ...state,
                selectedTodo: state.todos.filter(todo=> todo.id === action.payload)
            }
        default:
            return state;
    }




}