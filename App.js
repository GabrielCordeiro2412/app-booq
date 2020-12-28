import React, {useState, useEffect} from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import AppRoutes from './src/routes/app.routes'
import {NavigationContainer} from '@react-navigation/native'
import 'react-native-gesture-handler';
import  AppLoading  from 'expo-app-loading'

import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold} from '@expo-google-fonts/montserrat'


export default function App() {
  const[fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
    <StatusBar backgroundColor="#E5EEFF" barStyle="dark-content"/>
    <AppRoutes/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
