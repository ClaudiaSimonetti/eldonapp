import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GenericButton from '../components/button';
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color: colors.white,
        fontSize: 80,
        fontFamily: 'MontBold',
        alignItems: 'center',
        marginBottom: 100,
    }
});

function Home({setGetIn}){
    function enter(){
        setGetIn(true)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>ELDON</Text>
            <GenericButton
                title='INGRESAR'
                onPress={()=> enter()}
                color='#292929'
            />
        </View>
    )
}

export default Home;