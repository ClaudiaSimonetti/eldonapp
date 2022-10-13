import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Orders from '../screens/orders/orders.js'

const Stack = createNativeStackNavigator();

const OrderNavigator =()=>{
    return(
        <Stack.Navigator initialRouteName='Orders'>
            <Stack.Screen 
                name="Orders" 
                component={Orders}
                options={{
                    title: "Mis ordenes",
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'Quicksand',
                    },
                }}
                />
        </Stack.Navigator>
    )
};

export default OrderNavigator;