import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        height: '100%',
        width: '100%',
    },
    // title:{
    //     color: colors.white,
    //     fontSize: 80,
    //     fontFamily: 'Quicksand',
    //     alignItems: 'center',
    //     marginLeft: '15%',
    //     marginTop: '30%',
    //     marginBottom: 30,
    // },
    logoContainer:{
        // borderColor: colors.white,
        // borderWidth: 1,
        height: 200,
        marginTop: 50,
    },
    logo:{
        width: '80%',
        height: '80%',
        marginLeft: 40,
        marginTop: 20,
        // marginBottom: -100,
        // backgroundColor: colors.red,
    },
    loginContainer: {
        width: '80%',
        maxWidth: 400,
        padding: 15,
        marginLeft: '10%',
        borderColor: colors.white,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.gray,
        height: 320,
        
    },
    titleContainer:{
        color: colors.white,
        fontFamily: 'Quicksand',
        textAlign: 'center',
        fontSize: 26,
    },
    input: {
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Quicksand',
        marginBottom: 10,
        backgroundColor: colors.white,
        paddingLeft: 15,
        marginLeft: 10,
        marginTop: 15,
    },
    button:{
        width: '90%',
        marginLeft: 10,
        marginTop: 20,
    },
    prompt: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    promptButton: {
        // backgroundColor: colors.white,
        borderColor: colors.gray,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    promptMessage: {
        fontSize: 14,
        color: colors.white,
        fontFamily: 'Quicksand',
    },
    helperText:{
        fontSize: 14,
        color: colors.red,
        fontWeight: 'bold',
        fontFamily: 'Quicksand',
        marginLeft: 15,
    }
})