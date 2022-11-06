import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import Tabs from './tabs';
import AuthNavigator from './auth';
import TabsNavigator from './tabs';
import { useSelector } from 'react-redux';

const AppNavigator=()=>{
    // const [userId, setUserId]= useState(null)
    const userId =  useSelector(state => state.auth.userId)
    return(
        <NavigationContainer>
            {userId ? <TabsNavigator/> : <AuthNavigator/> }
        </NavigationContainer>
    )
};

export default AppNavigator;