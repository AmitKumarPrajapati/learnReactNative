/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component, Fragment } from 'react';
import {
  Text,View,Button,TextInput
} from 'react-native';
import Hello from './Components/Hello';

function Greetings(props){
  return <Text>{props.name}</Text>
}

class App extends Component {
  constructor(props) {
    super(props);
  }

handleClick(){
 let a =30;
 let b =60;
 let c = a+b;
 console.log("Hiiiiiiiii-------------->>>>>>>>>>>>>>>>.",c)
}
  render(props) {
    const handleClick = this.handleClick;
    return (
      <View style={{alignItems:'center', top:60}}>
        <TextInput placeholder="Enter Your Name Here"/>
        <Button 
        width={50}
        height={70}
        onPress={handleClick}
        title="Click Me"
        color="green"
        />
      </View>
    );
  }
}

export default App;
