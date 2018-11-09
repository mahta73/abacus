import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';

// custume components
import MainPage from './front-end/mainPage/mainPage';

const App  = createStackNavigator({
  Home: {screen: MainPage},
})

export default App;

