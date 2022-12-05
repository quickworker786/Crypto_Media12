import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import HomeScreen from './HomeScreen';
import Login from './Login';
import NewsList from './NewsList';
export default function HomeList() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="NewsList" component={NewsList} />
       
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})