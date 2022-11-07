import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const styles = StyleSheet.create({
    containerProduct: {
        flex: 1,
        flexDirection: 'row',
        borderColor: colors.gray,
        borderRadius: 10,
        borderWidth: 1,
        width: 380,
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
    },
    detail:{
        flex: 1,
        marginLeft: 20,
    },
    priceDetail:{
        fontFamily: 'Quicksand',
        fontSize: 16,
    },
    buttonDeleteContainer:{
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    icon:{
        paddingRight: 20,
    }
})