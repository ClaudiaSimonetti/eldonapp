import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function ImageSelector({onImage}){

    const [pickedUrl, setPickedUrl] = useState()

    const verifyPermissions = async()=>{
        const{ status }= await ImagePicker.requestCameraPermissionsAsync();
        if(status !== 'granted'){
            Alert.alert('Se necesita permiso para utilizar la camara',[{text: 'Okay'}])
            return false
        }
        return true
    }

    const selectImage = async ()=>{
        const hasPermission = await verifyPermissions()
        if(!hasPermission) return;
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1,1],
            quality: 0.5,
        })
        setPickedUrl(image.uri)
        onImage(image.uri)
    }

    return(
    <View>
    {!pickedUrl ?
        <Image
            style={{
                alignSelf:'center',
                height: 100,
                width: 100,
            }}
            source={{uri: 'https://via.placeholder.com/100.jpg'}}
        /> 
        :
        <Image
            style={{
                alignSelf:'center',
                height: 100,
                width: 100,
            }}
            source={{uri: pickedUrl}}
    /> 
}
    <Button
        title={!pickedUrl ? 'Agregar imagen': 'Editar imagen'}
        onPress={()=>selectImage()}
        color='#292929'
    />
    </View>
    )
}

export default ImageSelector;