import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from  'react-navigation'
import {createStackNavigator} from "react-navigation-stack";
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import SearchScreen from "./src/screens/SearchScreen"

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Results: ResultsShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "BusinessSearch"
    }
  }
)

export default createAppContainer(navigator)
