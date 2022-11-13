import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import ImageSelector from '../../components/imageSelector/imageSelector';
import { styles } from "./styles";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

function Profile(){
    return(
        <KeyboardAwareScrollView >
        <View style={styles.container}>
            <View style={styles.imgSelector}>
                <ImageSelector/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>Nombre</Text>
                <TextInput 
                    style={styles.input}
                    placeholder= ""
                    autoCapitalize="none"
                    autoCorrect={false}
                    // onChangeText={(text) => onHandleChange(text, 'email')}
                    // onBlur={() => onHandleBlur(formState.email.value, 'email')}
                    // value={formState.email.value}
                    // keyboardType="email-address"
                />
                <Text style={styles.text}>Apellido</Text>
                <TextInput 
                    style={styles.input}
                    placeholder= ""
                    autoCapitalize="none"
                    autoCorrect={false}
                    // onChangeText={(text) => onHandleChange(text, 'email')}
                    // onBlur={() => onHandleBlur(formState.email.value, 'email')}
                    // value={formState.email.value}
                    // keyboardType="email-address"
                />
                <Text style={styles.text}>Dirección</Text>
                <TextInput 
                    style={styles.input}
                    placeholder= ""
                    autoCapitalize="none"
                    autoCorrect={false}
                    // onChangeText={(text) => onHandleChange(text, 'email')}
                    // onBlur={() => onHandleBlur(formState.email.value, 'email')}
                    // value={formState.email.value}
                    // keyboardType="email-address"
                />
                <Text style={styles.text}>Teléfono</Text>
                <TextInput 
                    style={styles.input}
                    placeholder= ""
                    autoCapitalize="none"
                    autoCorrect={false}
                    // onChangeText={(text) => onHandleChange(text, 'email')}
                    // onBlur={() => onHandleBlur(formState.email.value, 'email')}
                    // value={formState.email.value}
                    // keyboardType="email-address"
                />
            </View>
        </View>
        <TouchableOpacity style={styles.buttonSave}>
            <Text style={styles.textSave}>Guardar</Text>
        </TouchableOpacity>
        </KeyboardAwareScrollView>
    )
}

export default Profile;