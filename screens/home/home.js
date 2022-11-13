import React from 'react';
import { Text, View } from 'react-native';
import GenericButton from '../../components/button/button';
import { colors } from "../../constants/colors";
import {styles} from "./styles";

function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido!</Text>
            <GenericButton
                title='Ingresá a nuestro E-Shop'
                onPress={()=> navigation.navigate("SectionsList")}
                color={colors.gray}
            />
        </View>
    )
}

export default Home;