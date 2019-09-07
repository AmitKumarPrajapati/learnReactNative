import React, { Component } from 'react'
import {Text,StyleSheet,Button} from 'react-native';

class Hello extends Component{
    render(){
        return(
            <Text style={styles.hello}>Hello World</Text>
        )
    }
}

export default Hello;

const styles = StyleSheet.create({
    hello:{
        color: 'red',
        padding: 30,
        fontSize: 30,
    }
});