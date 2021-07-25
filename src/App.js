/* eslint-disable no-undef */
// import React, { Component } from "react";
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './router';
import {store} from './store';
import './config/FoundationConfig';
import './config/ComponentsConfig';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';

export default App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '474017321493-s13l4f8om0bf499tmog71hd2d0juhu9s.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: '', // specifies a hosted domain restriction
      loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      iosClientId:
        '474017321493-s13l4f8om0bf499tmog71hd2d0juhu9s.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    });
  }, []);
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
