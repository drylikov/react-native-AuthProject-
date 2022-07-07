import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';

import { Link } from 'react-router-native'

export default class LoginScreen extends React.Component {
  state = {
    telefon: '',
    password: '',
    error: {
      telefon: false,
      password: false
    }
  }
  handleTelefon = (text) => {
    this.setState({
      telefon: text,
      error: {
        telefon: false
      }
    })
  }
  handlePassword = (text) => {
    this.setState({
      password: text,
      error: {
        password: false
      }
    })
  }
  login = (email, pass) => {
    this.setState({
      error: {
        telefon: true,
        password: true
      }
    })
  }
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>ODDS</Text>
        <View style={styles.bottom}>
          <Link to="/auth" style={styles.createAcc}>
            <Text style={styles.createAccText}>СОЗДАТЬ АККАУНТ</Text>
          </Link>
          <Text style={styles.between}>или</Text>
          <View>
            <View style={styles.inputBlock}>
              <Image style={styles.inputImg} source = {require('../src/img/telefon.png')} />
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "+7"
                placeholderTextColor = "#616161"
                autoCapitalize = "none"
                value={this.state.telefon}
                onChangeText = {(text)=> this.handleTelefon(text)}/>
              { this.state.error.telefon ?
                (<View style={styles.error}>
                  <Text style={styles.errorText}>Такой номер телефона не зарегистрирован в ODDS</Text>
                </View>) : null
              }
            </View>
            <View style={styles.inputBlock}>
              <Image style={styles.inputImg} source = {require('../src/img/password.png')} />
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Пароль"
                placeholderTextColor = "#616161"
                autoCapitalize = "none"
                value={this.state.password}
                onChangeText = {(text)=> this.handlePassword(text)}/>
              { this.state.error.password ?
                (<View style={styles.error}>
                  <Text style={styles.errorText}>Ошибочка... Пароль или телефон введены неверно.</Text>
                </View>) : null
              }
            </View>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = { () => this.login(this.state.email, this.state.password) }>
               <Text style = {styles.submitButtonText}>ВОЙТИ</Text>
            </TouchableOpacity>
            <Text style={styles.recovery}>Забыли пароль?</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingTop: 100,
    paddingLeft: 30,
    paddingRight: 30
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 50,
    color: '#ff8c18'
  },
  bottom: {
    paddingBottom: 50,
    justifyContent: 'space-between',
  },
  createAcc: {
    width: '100%',
    borderRadius: 33,
    backgroundColor: '#ffb047',
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'center'
  },
  createAccText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'LatoBold'
  },
  between: {
    marginTop: 30,
    marginBottom: 30,
    color: '#5e5e5c',
    textAlign: 'center',
    fontSize: 23,
    fontFamily: 'Lato'
  },
  inputBlock: {
    position: 'relative',
    width: '100%',
    marginBottom: 25,
    alignItems: 'center'
  },
  inputImg: {
    position: 'absolute',
    left: 0,
  },
  input: {
    width: '100%',
    paddingBottom: 10,
    paddingLeft: 35,
    fontSize: 20,
    fontFamily: 'Lato',
    borderBottomWidth: 1,
    borderColor: '#dfdfdf'
  },
  submitButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#414141',
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0)'
  },
  submitButtonText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 22,
    fontFamily: 'Lato',
  },
  recovery: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20,
    fontFamily: 'Lato'
  },
  error: {
    position: 'absolute',
    top: '100%',
    width: '100%',
    backgroundColor: '#ff3c3c',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
  },
  errorText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Lato'
  }
});
