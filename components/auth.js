import React from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';

import { Link } from 'react-router-native'

export default class AuthScreen extends React.Component {
  state = {
    securityPass: true,
    securityPass2: true,
    telefon: '',
    name: '',
    password: '',
    password2: '',
    error: {
      telefon: false,
      name: false,
      password: false,
      password2: false
    }
  }

  handleTelefon = (text) => {
    this.setState({telefon: text,error: {telefon: false}})
  }
  handleName = (text) => {
    this.setState({name: text,error: {name: false}})
  }
  handlePassword = (text) => {
    this.setState({password: text,error: {password: false}})
  }
  handlePassword2 = (text) => {
    this.setState({password2: text,error: {password2: false}})
  }

  changeSecurity = () => {
    this.setState({
      securityPass: !this.state.securityPass
    })
  }
  changeSecurity2 = () => {
    this.setState({
      securityPass2: !this.state.securityPass2,
    })
  }

  auth = () => {
    if( this.state.telefon == '' ){
      this.setState({error: {telefon: true}})
    }
    if( this.state.name == '' ){
      this.setState({error: {name: true}})
    }
    if( this.state.password == '' ){
      this.setState({error: {password: true}})
    }
    if( this.state.password2 == '' || this.state.password != this.state.password2 ){
      this.setState({error: {password2: true}})
    }

  }

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>ODDS</Text>
        <View style={styles.bottom}>
          <Text style={styles.bottomTitle}>СОЗДАЙТЕ СВОЙ АККАУНТ</Text>
          <View>
            <View style={styles.inputBlock}>
              <Image style={styles.inputImg} source = {require('../src/img/telefon.png')} />
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Телефон"
                placeholderTextColor = "#616161"
                autoCapitalize = "none"
                onChangeText = {(text)=> this.handleTelefon(text)}
              />
              { this.state.error.telefon ?
                (<View style={styles.error}>
                  <Text style={styles.errorText}>Такой номер телефона не зарегистрирован в ODDS</Text>
                </View>) : null
              }
            </View>
            <View style={styles.inputBlock}>
              <Image style={styles.inputImg} source = {require('../src/img/user.png')} />
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Имя и Фамилия"
                placeholderTextColor = "#616161"
                autoCapitalize = "none"
                onChangeText = {(text)=> this.handleName(text)}
              />
              { this.state.error.name ?
                (<View style={styles.error}>
                  <Text style={styles.errorText}>Поле должно содержать Вашу фамилию и имя</Text>
                </View>) : null
              }
            </View>
            <View style={styles.inputBlock}>
              <Image style={styles.inputImg} source = {require('../src/img/password.png')} />
              <TouchableOpacity
                style={styles.inputImgEye}
                onPress={ () => this.changeSecurity() }
              >
                <Image source = {require('../src/img/eye.png')}/>
              </TouchableOpacity>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Пароль"
                placeholderTextColor = "#616161"
                autoCapitalize = "none"
                secureTextEntry={this.state.securityPass}
                onChangeText = {(text)=> this.handlePassword(text)}
              />
              { this.state.error.password ?
                (<View style={styles.error}>
                  <Text style={styles.errorText}>Пароль должен содержать не менее 6 символов</Text>
                </View>) : null
              }
            </View>
            <View style={styles.inputBlock}>
              <Image style={styles.inputImg} source = {require('../src/img/password.png')} />
              <TouchableOpacity
                style={styles.inputImgEye}
                onPress={ () => this.changeSecurity2() }
              >
                <Image source = {require('../src/img/eye.png')}/>
              </TouchableOpacity>
              <TextInput style = {styles.input}
                underlineColorAndroid = "transparent"
                placeholder = "Повторите пароль"
                placeholderTextColor = "#616161"
                autoCapitalize = "none"
                secureTextEntry={this.state.securityPass2}
                onChangeText = {(text)=> this.handlePassword2(text)}
              />
              { this.state.error.password2 ?
                (<View style={styles.error}>
                  <Text style={styles.errorText}>Пароли не совпадают</Text>
                </View>) : null
              }
            </View>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = { () => this.auth() }
             >
               <Text style = {styles.submitButtonText}>СОЗДАТЬ</Text>
            </TouchableOpacity>
            <Link to="/login">
              <Text style={styles.cancel}>Отмена</Text>
            </Link>
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
  bottomTitle: {
    marginTop: 50,
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'LatoBold',
    color: '#000'
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
    zIndex: 10,
  },
  inputImgEye: {
    position: 'absolute',
    right: 0,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: '100%'
  },
  input: {
    width: '100%',
    paddingBottom: 10,
    paddingLeft: 35,
    fontSize: 20,
    fontFamily: 'Lato',
    borderBottomWidth: 1,
    borderColor: '#dfdfdf',
    zIndex: 9,
    position: 'relative'
  },
  submitButton: {
    marginTop: 30,
    width: '100%',
    borderWidth: 1,
    borderColor: '#414141',
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#ffad41'
  },
  submitButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Lato',
  },
  cancel: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 20
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
