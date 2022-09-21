import React, {useState} from 'react';
import Home from './screens/home';
import SectionsList from './screens/sectionsList';
import { useFonts } from 'expo-font';

export default function App() {
  const[loaded]=useFonts({
    'MontBold': require('./assets/fonts/Montserrat-Bold.ttf')
  })
  const [getIn, setGetIn]=useState(false)
  console.log('soy getIN', getIn)
  if(!loaded){
    return null;
  }
  return(
      getIn === false && <Home setGetIn={setGetIn}/> ||
      getIn === true && <SectionsList setGetIn={setGetIn}/>
  )
}




