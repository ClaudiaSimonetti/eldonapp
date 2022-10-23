import React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import ImageSelector from '../../components/imageSelector/imageSelector';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "white",
        fontSize: 20,
    }
})

function Profile(){
    return(
        <View style={styles.container}>
            <ImageSelector onImage={()=>null}/>
            <Text style={styles.text}>AQUI VA EL PERFIL</Text>
        </View>
    )
}

export default Profile;