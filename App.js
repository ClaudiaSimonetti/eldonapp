import React from 'react';
// import Home from './screens/home';
// import SectionsList from './screens/sectionsList';
import { useFonts } from 'expo-font';
import AppNavigator from './navigation';

export default function App() {
  const[loaded]=useFonts({
    'MontBold': require('./assets/fonts/Montserrat-Bold.ttf')
  })

  if(!loaded){
    return null;
  }

  return(
    <AppNavigator/>
  )
}




