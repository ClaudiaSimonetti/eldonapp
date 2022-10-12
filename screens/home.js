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
        fontFamily: 'Quicksand',
        alignItems: 'center',
        marginBottom: 100,
    }
});

function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>ELDON</Text>
            <GenericButton
                title='INGRESAR'
                onPress={()=> navigation.navigate("SectionsList")}
                color='#292929'
            />
        </View>
    )
}

export default Home;