import React from 'react-native';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "white",
        fontSize: 20,
    }
})

function Cart(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>AQUI VA EL CARRITO</Text>
        </View>
    )
}

export default Cart;