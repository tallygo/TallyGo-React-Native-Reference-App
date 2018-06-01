import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

import { createStackNavigator } from 'react-navigation';

import MainMenuScreen from './MainMenu';
import Example1Screen from './examples/1';

type Props = {};

export default createStackNavigator({
  MainMenu: { screen: MainMenuScreen },
  Example1: { screen: Example1Screen },
});
