import React from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ShopNavigator from './shop';
import OrderNavigator from './orders';
import { Ionicons } from "@expo/vector-icons"

const BottomTab = createBottomTabNavigator();

function Tabs(){
    return(
        <BottomTab.Navigator initialRouteName="ShopTab" screenOptions={{headerShown: false}} >
            
            <BottomTab.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{title:"Shop",
                        tabBarIcon:({focused})=>(<Ionicons
                            name={focused ? "home" : "home-outline"}
                            size={22}
                        />)
                }}
            />
            <BottomTab.Screen
                name="OrdersTab"
                component={OrderNavigator}
                options={{title:"Ordenes",
                        tabBarIcon:({focused})=>(
                            <Ionicons
                                name={focused ? "file-tray" : "file-tray-full-outline"}
                                size={22}
                            />)
                }}
            />
        </BottomTab.Navigator>
    )
}

export default Tabs;