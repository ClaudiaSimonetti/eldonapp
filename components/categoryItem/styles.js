import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 10, 
    },
    contentContainer:{
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: 'white',
        borderRadius: 5,
        marginVertical: 20,
        paddingVertical: 50,
        paddingHorizontal: 50,
        width: 350,
    },
    title:{
        fontFamily: 'Quicksand',
        textTransform: 'capitalize',
        fontSize: 16,
    }
});


