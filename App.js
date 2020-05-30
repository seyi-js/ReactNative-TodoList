/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text,StatusBar} from 'react-native';
import { Container } from 'native-base'
import store from './src/store/store'
import { Provider } from 'react-redux'
import Layout from './src/components/layout/Layout'
const App = () => {

  useEffect( () => {
    StatusBar.setBarStyle( "light-content", true )
    StatusBar.setBackgroundColor("#000000")
  },[])
  return (
    <Provider store={ store }>
      <View >
       
        <Layout />
        </View>
    </Provider>
  );
};

export default App;
