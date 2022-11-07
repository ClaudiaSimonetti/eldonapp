import { StyleSheet } from 'react-native';
import {colors }from '../../constants/colors/colors'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 10, 
    },
    contentContainer:{
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
        borderColor: colors.gray,
        borderWidth: 0.75,
        marginVertical: 10,
        paddingVertical: 20,
        paddingHorizontal: 50,
        width: 350,
    },
    title:{
        fontFamily: 'Quicksand',
        textTransform: 'capitalize',
        fontSize: 30,
        fontWeight: 'bold',
    }
});


