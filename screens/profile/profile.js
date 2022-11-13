import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import ImageSelector from '../../components/imageSelector/imageSelector';
import { styles } from "./styles";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useState} from 'react';

function Profile(){

    const [ data, setData ]= useState({name:"", lastName:"", address:"", phone:""})

    function onHandleChange(text, key){
        setData({...data, [key] : text})
    }

    const [errName , setErrName] = useState()
    const [errLastName , setErrLastName] = useState()
    const [errAddress , setErrAddress] = useState()
    const [errPhone , setErrPhone] = useState()

    const [ dataSave, setDataSave]= useState({})
    const [ editData, setEditData]= useState(false)
    
    const REGEXText= /^[a-zA-ZÀ-ÿ\s]{2,20}$/
    const REGEXTextAndNumbers=  /[A-Za-z0-9]+/g
    const REGEXNumbers =  /^[0-9]{8,20}$/

    function validationForm(){
        if(data.name === ""){
            setErrName("Debe completar el campo")
        }else if(!data.name.match(REGEXText)){
            setErrName("El formato no es correcto. Solo puede contener letras")
        }else{
            setErrName("")
        }

        if(data.lastName === ""){
            setErrLastName("Debe completar el campo")
        }else if(!data.lastName.match(REGEXText)){
            setErrLastName("El formato no es correcto. Solo puede contener letras")
        }else{
            setErrLastName("")
        }

        if(data.address === ""){
            setErrAddress("Debe completar el campo")
        }else if(!data.address.match(REGEXTextAndNumbers)){
            setErrAddress("El formato no es correcto. Solo puede contener letras y números")
        }else{
            setErrAddress("")
        }

        if(data.phone === ""){
            setErrPhone("Debe completar el campo")
        }else if(!data.phone.match(REGEXNumbers)){
            setErrPhone("El formato no es correcto. Debe contener al menos 8 números")
        }else{
            setErrPhone("")
        }
    }

    function save() {
        setDataSave({...dataSave, data})

        validationForm()
        if( errName === ""   
            &&  errLastName === "" 
            && errAddress === "" 
            && errPhone === ""){
            setEditData(true)
        }else{ 
            setEditData(false)
        }
    }

    function edit(){
        setEditData(false)
    }

    return(
        <KeyboardAwareScrollView >
        <View style={styles.container}>
            <View style={styles.imgSelector}>
                <ImageSelector/>
            </View>
            {editData === false ?
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Nombre</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder= ""
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={data.name}
                        onChangeText={(text) => onHandleChange(text,'name')}
                    />
                    {<Text style={styles.textError}>{errName}</Text>}
                    <Text style={styles.text}>Apellido</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder= ""
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={data.lastName}
                        onChangeText={(text) => onHandleChange(text, 'lastName')}
                    />
                    {<Text style={styles.textError}>{errLastName}</Text>}
                    <Text style={styles.text}>Dirección</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder= ""
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={data.address}
                        onChangeText={(text) => onHandleChange(text, 'address')}
                    />
                    {<Text style={styles.textError}>{errAddress}</Text>}
                    <Text style={styles.text}>Teléfono</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder= ""
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={data.phone}
                        onChangeText={(text) => onHandleChange(text, 'phone')}
                    />
                    {<Text style={styles.textError}>{errPhone}</Text>}
                </View>
            :
                <View style={styles.textDataContainer}>
                    <Text style={styles.text}>Nombre</Text>
                    <Text style={styles.textData}>{dataSave.data.name}</Text>
                    <Text style={styles.text}>Apellido</Text>
                    <Text style={styles.textData}>{dataSave.data.lastName}</Text>
                    <Text style={styles.text}>Dirección</Text>
                    <Text style={styles.textData}>{dataSave.data.address}</Text>
                    <Text style={styles.text}>Teléfono</Text>
                    <Text style={styles.textData}>{dataSave.data.phone}</Text>
                </View>
            }
        </View>
        {editData === false ?
            <TouchableOpacity style={styles.buttonSave} onPress={save}>
                <Text style={styles.textSave}>GUARDAR</Text>
            </TouchableOpacity>
        :
            <TouchableOpacity style={styles.buttonSave} onPress={edit}>
                <Text style={styles.textSave}>EDITAR</Text>
            </TouchableOpacity>
        }
        </KeyboardAwareScrollView>
    )
}

export default Profile;