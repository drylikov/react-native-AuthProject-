import React from 'react';
import { NativeModules, Image, TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';

export default class TestScreen extends React.Component {

  state = {
    network: ''
  }

  componentWillMount(){
    NativeModules.Network.Scan( (err, result) => {
      this.setState({network: result})
    })
  }

  render() {
    return (
      <View>
        <Text>Доступные сети: {this.state.network}</Text>
      </View>
    );
  }
}
