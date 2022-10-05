import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home  from '../screens/home.js';
import  SectionsList  from '../screens/sectionsList.js'
const Stack = createNativeStackNavigator();


const ShopNavigator =()=>{
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name="Home" component={Home}/> 
            <Stack.Screen name="SectionsList" component={SectionsList}/>
        </Stack.Navigator>
    )
};

export default ShopNavigator;