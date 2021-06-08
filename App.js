import { StatusBar } from 'expo-status-bar';
import {AppLoading} from 'expo';
import React from 'react';
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';
import{Roboto_400regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import Home from './src/pages/Home';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded]=useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  else{
    return (
      <>
      <StatusBar style="dark" backgroundColor="transparent" translucent/>
      <Home/>
      </>
    ); 
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
