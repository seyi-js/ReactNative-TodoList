/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,  } from 'react-native';
import {Container, Icon} from 'native-base';
const TodoItem = ( { todo:{text,id}, delTodo }) => {
    return (
        <TouchableOpacity style={styles.listitem}>
        <View style={styles.listitemview}>
          <Text style={styles.listitemtext}>{text}</Text>
                <Icon type="FontAwesome" name='remove' size={ 18 } color="white"
                   onPress={()=> delTodo(id) } 
                />
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create( {
    listitem: {
        padding: 20,
        backgroundColor: 'purple',
        borderBottomWidth: 1,
        borderColor: '#eee',
      },
      listitemview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      listitemtext: {
        fontSize: 18,
      },
});

export default TodoItem;


