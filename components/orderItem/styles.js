import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // borderBottomColor: "blue",
        // borderBottomWidth: 1,
        // backgroundColor: "blue",
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.black,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10,




        height: 80,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    headerContainer: {},
    contentContainer: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
    },
    content: {},
    total: {
        fontSize: 16,
        fontFamily: "Quicksand",
    },
});