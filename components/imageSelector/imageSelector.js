import React, { useState } from 'react';
import { View, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from "./styles";

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
        <View style={styles.container}>
            <View >
                {!pickedUrl ?
                    <Image
                        style={styles.img}
                        source={{uri: 'https://via.placeholder.com/100.jpg'}}
                    /> 
                    :
                    <Image
                        style={styles.img}
                        source={{uri: pickedUrl}}
                    /> 
                }
            </View>
            <View>
                <Button
                    title={!pickedUrl ? 'Agregar imagen': 'Editar imagen'}
                    onPress={()=>selectImage()}
                    color='#292929'
                />
            </View>
        </View>
    )
}

export default ImageSelector;