import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imgSelector:{
        width: '90%',
        height: '30%',
        marginTop: 30,
    },
    inputContainer:{
        width: '90%',
        height: '70%',
        marginTop: 20,
    },
    text:{
        fontFamily: 'Quicksand',
        fontSize: 16,
        marginLeft: 11,
    },
    input: {
        borderBottomColor: colors.gray,
        borderWidth: 1,
        width: '90%',
        fontFamily: 'Quicksand',
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: colors.white,
        paddingLeft: 15,
        marginLeft: 10,
        marginTop: 15,
        color: colors.black,
        height: 40,
    },
    buttonSave:{
        borderWidth: 2,
        height: 40,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
        width: '30%',
        marginLeft: '58%',
        backgroundColor: colors.gray
    },
    textSave:{
        color: colors.white,
        fontFamily: 'Quicksand',
        fontWeight: 'bold',
        fontSize: 16,
    }
})