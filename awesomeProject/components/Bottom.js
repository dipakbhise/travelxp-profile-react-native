import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Bottom = () => {
  return (
    <View style={{position:'absolute',bottom:0, width:'100%'}}>
    <View style={{backgroundColor:'white', padding:25, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
    <Text style={{color:'black'}}>Hello</Text>
    <Text style={{color:'black'}}>Hello</Text>
    <Text style={{color:'black'}}>Hello</Text>
    <Text style={{color:'black'}}>Hello</Text>
      
      <StatusBar style="auto" />
    </View>
    </View>
  )
}

export default Bottom