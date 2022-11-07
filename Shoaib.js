import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Shoaib({ navigation, route }) {
 
    
     return <Text>This is {route.params.name}'s profile</Text>;
    
}

const styles = StyleSheet.create({})