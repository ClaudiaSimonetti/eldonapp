import { StyleSheet } from 'react-native';
import {colors} from '../../constants/colors/colors.js'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderColor: colors.gray,
        borderRadius: 10,
        borderWidth: 1,
        width: '90%',
        marginLeft: 20,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5
    },
    title:{
        fontFamily:'Quicksand',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    detail:{
        flex: 1,
        marginLeft: 20,
    },
    priceDetail:{
        fontFamily: 'Quicksand',
        fontSize: 16,
    }
});