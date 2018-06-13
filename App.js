import React, { Component } from 'react';

import { createStackNavigator } from 'react-navigation';

import MainMenuScreen from './MainMenu';
import Example1Screen from './examples/1';
import Example2Screen from './examples/2';
import Example4Screen from './examples/4';

type Props = {};

export default createStackNavigator({
  MainMenu: { screen: MainMenuScreen },
  Example1: { screen: Example1Screen },
  Example2: { screen: Example2Screen },
  Example4: { screen: Example4Screen },
});
