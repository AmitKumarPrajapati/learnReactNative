/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button
} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Amit', age: '30', college: 'Career Point University' }
  }

  
  render() {
    const {name,age,college} = this.state
    console.log(name,age,college)
    return (
      <Fragment>
        <Text>Name</Text>
        <TextInput 
          placeholder="Enter your name" 
          onChangeText={(name) => this.setState({name})}
          value={this.state.name} 
          />
        <Text>Age</Text>
        <TextInput 
          placeholder="Enter your age" 
          onChangeText={(age) => this.setState({age})}
          value={this.state.age}
          />
        <Text>College</Text>
        <TextInput 
          placeholder="Enter your college" 
          onChangeText={(college) => this.setState({college})}
          value={this.state.college}
          />
        <Button title="Click Me"/>
      </Fragment>
    );
  };
}


export default App;
