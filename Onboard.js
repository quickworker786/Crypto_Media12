
import React from 'react'
import { StyleSheet, Text, View,Image ,SafeAreaView, Button, Pressable, ScrollView} from 'react-native'

export default function Onboard({ navigation }) {
  return (
    
       <SafeAreaView style={{backgroundColor:'#F9FBFC',flex:1}} >
      
      <ScrollView >
      
     <Image source={require('./assets/image1.jpg')} style={styles.image} />
     
      
  <View >
 
      <View style={{paddingHorizontal:20,paddingVertical:20}}>
          
         
          <View style={{flexDirection:'row', }}  >
           
           <View style={styles.btn}>
           <Pressable onPress={() => navigation.navigate('Login', { name: 'Login' })} >
          <Text   style={{fontSize:18}}>Login </Text>
          </Pressable>
          </View>
         
          <Pressable onPress={() => navigation.navigate('Shoaib', { name: 'Jane' })}   >
          <View style={styles.btn1}>
          <Text style={{fontSize:18}}>Signup </Text>
          </View>
          </Pressable >
          </View>
          
          </View>
         
          
         
      
   </View>

   </ScrollView>
   
   </SafeAreaView  >
    

  )
}

const styles = StyleSheet.create({
    image :{
        height: 450,
        width:'100%',
    },
    indicatorContainer :
    {
        height:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    indicator :{
        height:3,
        width:50,
        backgroundColor:'grey',
        marginHorizontal:15,
        borderRadius:5,
    },
    indicatorActive :{
        backgroundColor:'#A9A9A9'

    },
    title :{
        fontSize:32,
        fontWeight:'bold',
    },
    btn : {
        height:50,
        width:160,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        fontSize:100,
        flexDirection:'row',
        marginTop:50,
        opacity:30,
        marginHorizontal:5,
       backgroundColor :'#87ceeb'
    },
    btn1 : {
        height:50,
        width:160,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        fontSize:100,
        flexDirection:'row',
        marginTop:50,
        marginHorizontal:5,
       backgroundColor :'#5db8fe'
    }
})