import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'

import LoginScreen from './components/login'
import AuthScreen from './components/auth'
import TestScreen from './components/test';

import {createStore} from 'redux';
import reducers from './reducers';


const initialState = {};
const store = createStore(reducers, initialState);

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <View>
            <Link to="/">
              <Text>Home</Text>
            </Link>
            <Link to="/login">
              <Text>Login</Text>
            </Link>
            <Link to="/auth">
              <Text>Auth</Text>
            </Link>
          </View>
          <Route exact path="/" component={TestScreen}/>
          <Route path="/login" component={LoginScreen}/>
          <Route path="/auth" component={AuthScreen}/>
        </View>
      </NativeRouter>      
    );
  }
}

const styles = StyleSheet.create({
});
