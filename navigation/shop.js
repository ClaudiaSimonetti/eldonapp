import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home  from '../screens/home/home.js';
import  SectionsList  from '../screens/sectionList/sectionsList.js'
import Products from '../screens/products/products.js';
import Item from '../screens/item/item.js';
import { colors } from '../constants/colors.js';

const Stack = createNativeStackNavigator();

const ShopNavigator =()=>{
    return(
        <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
                headerStyle:{
                    backgroundColor: colors.white,
                },
                headerTintColor: colors.gray,
                headerTitleStyle: {
                    fontFamily: 'Quicksand',
                },
                headerTitleAlign: 'center',
            }}
            >
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    title: "EL DON",
                }}
            /> 
            <Stack.Screen 
                name="SectionsList" 
                component={SectionsList}
                options={{
                    title: "Nuestros productos"
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={Products}
                options={
                    ({route})=>({title:route.params.name})
                }
            />
            <Stack.Screen 
                name="Item" 
                component={Item}
                options={
                    ({route})=>({title:route.params.name})
                }
            />
        </Stack.Navigator>
    )
};

export default ShopNavigator;