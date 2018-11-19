/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native';


type Props = {};
export default class App extends Component<Props> {

  state  = {
    textValue: 'Hi! I am here'
  }
  

  onClickMe = () => {
    this.setState({textValue: 'Button click'});
  }


  render() {
    return (
      <View style={styles.container}>
        <Text testID='iamhere' style={styles.welcome}>{this.state.textValue}</Text>
        <Button
        testID='clickme'
        onPress={this.onClickMe}
        title="Click Me"
        color="#841584"
        accessibilityLabel="Click Me"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
