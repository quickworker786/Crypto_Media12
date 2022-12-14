/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboard from './Onboard';
import Shoaib from './Shoaib';
import HomeScreen from './screens/HomeScreen';
import HomeList from './screens/HomeList';
import Login from './screens/Login';
import SignUp from './screens/SignUp';

import { firebase } from './config'

const Stack = createNativeStackNavigator();
function App() {
  
  return (
  
    <NavigationContainer  >
    <Stack.Navigator >
    <Stack.Screen name="Onboard" component={Onboard} />
    <Stack.Screen name="HomeList" component={HomeList} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />

    <Stack.Screen name="Shoaib" component={Shoaib} />

    </Stack.Navigator>
     
  </NavigationContainer>
  
 
  );
}



export default App;