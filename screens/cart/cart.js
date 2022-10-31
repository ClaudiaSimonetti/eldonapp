import React, { Alert, FlatList, TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
// import  cart  from '../../constants/data/cart.js'
import CartItem from '../../components/cartItem/cartItem.js';
import { useSelector, useDispatch } from 'react-redux';
import {confirmCart, confirmOrder, removeFromCart} from '../../store/actions/cartAction.js'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "white",
        fontSize: 20,
    }
})

function Cart({navigation}){
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    function onDelete(id){
        Alert.alert(
            "Esta por eliminar un producto",
            "Usted desea eliminar este producto?",
        [
            {
                text: "Cancelar",
                onPress: () => null,
                // style: "cancel"
            },
            {},
            { 
                text: "Sí, deseo", 
                onPress: () =>dispatch(removeFromCart(id)) 
            }
        ]
        )
    }
    const renderItem = ({item})=>
        <CartItem item={item} onDelete={onDelete}/>
    function onConfirm(){
        dispatch(confirmCart(items, total))
    }
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    sytle={styles.container}
                    keyExtractor={item=>item.id.toString()}
                
                
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonConfirm} onPress={onConfirm} disabled={items.length === 0}>
                <Text style={styles.textButtonConfirm}>Finalizar compra</Text>
                <View>
                    <Text>Total:</Text>
                    <Text>${total}</Text>
                </View>


                </TouchableOpacity>

            </View>
            
        </View>
    )
}

export default Cart;