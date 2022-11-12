import { StyleSheet } from 'react-native';
import {colors} from '../../constants/colors/colors.js'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: -10,
    },
    text: {
        color: "white",
        fontSize: 20,
    },
    footer:{
        width: '90%',
        marginBottom: 20
        
    },
    total:{
        paddingLeft: 250,
    },
    totalText:{
        fontFamily: 'Quicksand',
        fontWeight: 'bold',
        fontSize: 16,
    },
    textButtonConfirm:{
        border: '2px solid red',
        borderWidth: 2,
        paddingVertical: 10,
        fontFamily: 'Quicksand',
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.white,
        backgroundColor: colors.black,
        fontSize: 16
    },
    buttonConfirm:{
        marginTop: 20,
    }
})