/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Container, Body, Left, Right, Header as Heading, Icon} from 'native-base'

const Header = () => {
    return (
        <Heading style={styles.header}>
            <Left style={{flex: 1}}>
                <Icon style={styles.icon} name="ios-menu"/>
            </Left>
            <Body style={{flex: 1}}>
                <Text style={styles.text}>TodoList</Text>
            </Body>
            <Right style={{flex: 1}}/>
                
            
        </Heading>
    )
}

const styles = StyleSheet.create( {
    header: {
        backgroundColor: 'purple',
        // marginTop: '-20'
        // display: 'flex'
    },

    icon: {
        color: '#fff',
        
    },

    text: {
        fontSize: 30,
        color:'#fff',
    }
})
export default Header


