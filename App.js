import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Bottom from './awesomeProject/components/Bottom';
import Main from './awesomeProject/components/Main';

export default function App() {
  return (
    


    <View style={{backgroundColor:'#F4F8FD'}}>
    <ScrollView>
      <Main />
    </ScrollView>

    <Bottom/>
    </View>




  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
