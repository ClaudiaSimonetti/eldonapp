import { useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Image } from "react-native";
import GenericButton from "../../components/button";
import { colors } from "../../constants/colors";
import { styles }  from "./styles";
import { useState, useReducer } from 'react';
import { signUp, signIn } from "../../store/actions/authAction";
import logo from "../../assets/img/logo.png";
import { onFocusOut, onInputChange, UPDATED_FORM} from "../../utils/forms.js";

const initialState = {
    email: { value: '', error: '', touched: false, hasError: true },
    password: { value: '', error: '', touched: false, hasError: true },
    isFormValid: false,
}

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATED_FORM: 
        const { name, value, hasError, error, touched, isFormValid} = action.data;
        return {
            ...state,
            [name]: {
                ...state[name],
                value,
                hasError,
                error,
                touched,
            },
            isFormValid
        }
        default:
            return state;
    }
}

function Auth({navigation}){
    const dispatch = useDispatch()
    const [isLogin, setIsLogin]= useState(true);
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    
    const title = isLogin ? 'Login' : 'Registro';
    const message = isLogin ? 'No tengo cuenta. Registrarme' : 'Ya estoy registrado';
    const messageAction = isLogin ? 'Ingresar' : 'Registrarse';
    const placeholderInputUser = isLogin ? 'Usuario' : 'Ingrese su email';
    const placeholderInputPassword = isLogin ? 'Contraseña' : 'Ingrese una contraseña';
    
    function onHandleSubmit(){
        dispatch(isLogin ? 
            signIn(formState.email.value ,formState.password.value) : 
            signUp(formState.email.value, formState.password.value)
        );

    }
    const onHandleChange = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState)
    }
    const onHandleBlur = (value, type) => {
        console.log("onHandleBlur -> type", type)
        console.log("onHandleBlur -> value", value)
        
        onFocusOut(type, value, dispatchFormState, formState)
    }

    return(
        <KeyboardAvoidingView style={styles.container} >
            <View style={styles.logoContainer}>
            <Image
                        source={logo}
                        style={styles.logo}
                    />
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.titleContainer}>{title}</Text>
                <TextInput 
                    style={styles.input}
                    placeholder= {placeholderInputUser}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text, 'email')}
                    onBlur={() => onHandleBlur(formState.email.value, 'email')}
                    value={formState.email.value}
                    keyboardType="email-address"
                />
                {formState.email.hasError && formState.email.touched   && (
                    <View style={styles.message}>
                        <Text style={styles.helperText}>{formState.email.error}</Text>
                    </View>
                )} 
                <TextInput 
                    style={styles.input}
                    placeholder= {placeholderInputPassword}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text, 'password')}
                    onBlur={() => onHandleBlur(formState.password.value, 'password')}
                    value={formState.password.value}
                />
                {formState.password.hasError && formState.password.touched  && (
                    <View style={styles.message}>
                        <Text style={styles.helperText}>{formState.password.error}</Text>
                    </View>
                )} 
                <View style={styles.button}>
                    <GenericButton
                        title={messageAction}
                        color={colors.black}
                        onPress={()=>onHandleSubmit()}
                        disable={!formState.isFormValid}
                    />
                </View>
                <View style={styles.prompt}>
                    <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
                        <Text style={styles.promptMessage}>{message}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth;