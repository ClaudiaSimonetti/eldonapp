import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GenericButton from '../components/button';
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    containerTitle:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.black,
        width: '100%',
        height: 50,
        marginTop: 50,
    },
    title:{
        fontSize: 20,
        backgroundColor: colors.black,
        color: '#fafafa',
        marginLeft: 5,
        fontFamily: 'MontBold',
    
    },
    buttonContainer: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: colors.white,
        borderRadius: 5,
        marginVertical: 20,
        paddingVertical: 50,
        paddingHorizontal: 50,
        width: 350,
    },
    button:{
        marginTop: 150,
    },
    text:{
        fontSize: 20,
        marginVertical: 10,
        color: colors.gray,
    } 
});

function SectionsList({setGetIn}){
    function backHome(e){
        console.log('click sections', e)
        setGetIn(false)
    }
    const[selected, setSelected]=useState(false)
    console.log(selected)
    function itemSelected(){
        setSelected(true)
    }
    function close(){
        setSelected(false)
    }
    return(
        <View style={styles.container}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>ELDON</Text>
            </View>
            <View style={styles.buttonContainer}>
                <GenericButton
                    title="Ropa Hombre"
                    color={colors.black}
                    onPress={()=>itemSelected()}
                />
            </View>
            {selected === true 
            ?
            (<View>
                <Text style={styles.text}>No hay más stock</Text>
                <GenericButton
                    title="Cerrar"
                    onPress={()=>close()}
                    color={colors.gray}
                />
            </View>) 
            : 
            null}
            <View style={styles.buttonContainer}>
                <GenericButton
                    title="Ropa Mujer"
                    color={colors.black}
                    onPress={()=>null}
                />
            </View>
            <View style={styles.button}>
                <GenericButton
                    title='Volver al Home'
                    color= '#292929'
                    onPress={()=>backHome(false)}
                />
            </View>
        </View>
    )
}

export default SectionsList;