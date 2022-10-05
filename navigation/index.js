import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import ShopNavigator from './shop';
import Tabs from './tabs';


const AppNavigator=()=>{
    return(
        <NavigationContainer>
            <Tabs/>
            {/* <ShopNavigator/> */}
        </NavigationContainer>

    )
};

export default AppNavigator;