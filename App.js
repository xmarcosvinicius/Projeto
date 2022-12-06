// import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

import Routes from './src/router';

export default function App() {
  return (
    <>
    
    <StatusBar style="light" backgroundColor='#000' translucent={true}></StatusBar>
    <Routes></Routes>
    
    </>
      
    
  );
}

const Styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


