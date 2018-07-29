import React, { Component } from 'react';
//import { withRouter } from 'react-router-dom';

//import { SignUpLink } from './SignUp';
//import './App.css';
import { auth } from '../firebase/firebase';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
//import * as routes from '../constants/routes';


class SignIn extends Component {
  state = { isSignedIn: false }
    uiConfig = {
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {
      signInSuccess: () => false
      }
    }

    componentDidMount = () => {
      auth.onAuthStateChanged(user => {
        this.setState({ isSignedIn: !!user })
        console.log("user", user)
      })
    }
  
    componentWillUnmount() {
      console.log("byebye");
      //this.unregisterAuthObserver();
    }

    render() {
      return (
        <div className="SignInPage">
          {this.state.isSignedIn ? (
            <div>Signed In</div>
          ) : (
            <StyledFirebaseAuth
              uiConfig = {this.uiConfig}
              firebaseAuth={auth}
            />
          )}
        </div>
        ) 
      }
    }

export default SignIn;