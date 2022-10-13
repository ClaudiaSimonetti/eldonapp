import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home  from '../screens/home.js';
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
                // headerLeft:()=><Text>agregar otra arrow</Text>
            }}
            >
            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{
                    title: "Inicio",
                    // headerShown: false,
                }}
            /> 
            <Stack.Screen 
                name="SectionsList" 
                component={SectionsList}
                options={{
                    title: "Categorias"
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={Products}
                // options={{
                //     title: "Producto"
                // }}
                options={
                    ({route})=>({title:route.params.name})
                    
                }
            />
            <Stack.Screen 
                name="Item" 
                component={Item}
                // options={{
                //     title: "Producto"
                // }}
                options={
                    ({route})=>({title:route.params.name})
                    
                }
            />
        </Stack.Navigator>
    )
};

export default ShopNavigator;