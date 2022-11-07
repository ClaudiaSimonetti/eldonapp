import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        color: colors.white,
        fontSize: 60,
        fontFamily: 'Quicksand',
        marginBottom: 100,
    }
})
