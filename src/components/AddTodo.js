/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import {connect} from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import store from '../store/store'
import {Icon} from 'native-base'
import {addTodo} from '../actions/TodoActions'
const AddTodo = ( props ) => {
    const [ text, setText ] = useState( '' )
    const clearField = () => {
        if ( text.length >= 5 ) {
            const newTodo = {
                id: 90,
                text
            }
       
            store.dispatch(addTodo( newTodo ));
            setText('');
        } else {
            alert('Your todo must be more than 5 chars')
        }
        
        
      };
    
    // const todos = props.todo.todos
    return (
        <View>
        <TextInput
          placeholder="Enter Todo...."
          style={styles.input}
          value={text}
          onChangeText={(textValue)=> setText(textValue)}
        />
        <TouchableOpacity style={styles.btn} onPress={() => clearField()}>
          <Text style={styles.btnText}>
            <Icon type="FontAwesome" name="plus" size={20} />
            Add Item
          </Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create( {
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
        backgroundColor: '#fff'
      },
      btn: {
        backgroundColor: 'purple',
        padding: 9,
        margin: 5,
      },
      btnText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
      },
})

const mapStateToProps = ( state ) => ( {
    todo: state.todo
})


export default connect( mapStateToProps, { addTodo })(AddTodo)
