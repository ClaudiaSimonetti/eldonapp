import React from 'react';
import { useFonts } from 'expo-font';
import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  const[ loaded ] = useFonts({'Quicksand': require('./assets/fonts/Quicksand-Regular.ttf')})

  if(!loaded){
    return null;
  }

  return(
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  )
}




