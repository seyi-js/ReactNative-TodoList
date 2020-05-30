/* eslint-disable prettier/prettier */
import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet,Text, View, FlatList } from 'react-native'
import TodoItem  from './TodoItem'
import { deleteTodo } from '../actions/TodoActions'
import store from '../store/store'
const Todos = (props) => {

   const todos = props.todo.todos
    // Delete Todo
    const delTodo = ( id ) => {
        
        if ( id ) {
            console.log(id)
            store.dispatch(deleteTodo(id))
        } else {
          return  null
        }
    }
    return (
        
        
        <FlatList
        data={todos}
                renderItem={ ( { item } ) => <TodoItem todo={item} delTodo={delTodo} /> }
      />
      
    )
}
const styles = StyleSheet.create({})

const mapStateToProps = ( state ) => ( {
    todo: state.todo
})


export default connect(mapStateToProps, {deleteTodo})(Todos)


