import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Profile from './component/Profiles/Profile';
import App from './component/App';
import Tiket from './component/Tikets/Tiket';
import Login from './component/User/Login';
import Register from './component/User/Register';
import TiketSaya from './component/Tikets/TiketSaya';
import KonfirmasiTiket from './component/Payments/KonfirmasiTiket';

const Router = createStackNavigator(
  {
    App: {
      screen: App,
    },
    Profile: {
      screen: Profile,
    },
    Tiket: {
      screen: Tiket,
    },
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
    TiketSaya: {
      screen: TiketSaya,
    },
    KonfirmasiTiket: {
      screen: KonfirmasiTiket,
    },
  },
  {initialRouteName: 'App'},
);

export default createAppContainer(Router);
