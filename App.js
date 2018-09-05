/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, CardSection, Spinner} from './src/components/common';
import LoginForm from './src/components/LoginForm';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state ={loggedIn: null};
  componentWillMount = () => {
    firebase.initializeApp({
      apiKey: "AIzaSyB6Ax8PfbvujZMXgpIIhq0zEuDCubwFJkY",
      authDomain: "authentication-e6107.firebaseapp.com",
      databaseURL: "https://authentication-e6107.firebaseio.com",
      projectId: "authentication-e6107",
      storageBucket: "authentication-e6107.appspot.com",
      messagingSenderId: "943815583173"
    });
    firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        this.setState({ loggedIn: true });
    } else {
      this.setState ({loggedIn: false});
    }

    })
  };
  renderContent() {
switch (this.state.loggedIn) {
  
  case true:
    return (<CardSection>
      <Button onPress={()=>firebase.auth().signOut()}>Log Out</Button>
      </CardSection>)
  
  case false:
return <LoginForm />;
    

  default:
    return <Spinner size='large'/>
}
  }
  render() {
    return (
      <View>
       <Header headerText="Authentication"/>
       {this.renderContent()}
       
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
