/* eslint-disable no-undef */
// import React, { Component } from "react";
import React from 'react';
import {Provider} from 'react-redux';
import AppContainer from './router';
import {store} from './store';
import './config/FoundationConfig';
import './config/ComponentsConfig';

export default App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};
