import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Profile from './component/Profiles/Profile';
import App from './component/App';
import Login from './component/User/Login';
import Register from './component/User/Register';

const Router = createStackNavigator(
  {
    App: {
      screen: App,
    },
    Profile: {
      screen: Profile,
    },
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
  },
  {initialRouteName: 'App'},
);

export default createAppContainer(Router);
