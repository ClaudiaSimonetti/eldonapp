import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/profile/profile.js'
import { TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Ionicons } from "@expo/vector-icons"
import { Text } from 'react-native';


const Stack = createNativeStackNavigator();

const ProfileNavigator =({navigation})=>{
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
                name="Profile" 
                component={Profile}
                options={{
                    title: "Mi Pefil",
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'Quicksand',
                    },
                    // headerRight:()=>(
                    //     <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    //         <Text>Volver al home</Text><Ionicons name="add-circle-outline" size={24} color={'red'}/>
                    //     </TouchableOpacity>
                    // )
                }}
                />
        </Stack.Navigator>
    )
};

export default ProfileNavigator;