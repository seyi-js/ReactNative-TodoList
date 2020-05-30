/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react'
// import  } from 'react-native'
import {ScrollView, StatusBar} from 'react-native'
import { View} from 'react-native'
import Header from '../Header'
import Todos from '../Todos'
import AddTodo from '../AddTodo'

const Layout = () => {

    useEffect( () => {
        StatusBar.setBarStyle( "light-content", true )
        StatusBar.setBackgroundColor("purple")
      },[])
    return (
        <ScrollView>
        <View >
    
            <Header />
            <AddTodo/>
            <Todos/>
        </View>
        </ScrollView>
    )
}

export default Layout
