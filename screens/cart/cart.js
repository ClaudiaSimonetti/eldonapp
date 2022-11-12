import React, { Alert, FlatList, TouchableOpacity } from 'react-native';
import { Text, View, } from 'react-native';
import CartItem from '../../components/cartItem/cartItem.js';
import { useSelector, useDispatch } from 'react-redux';
import {confirmCart, removeFromCart} from '../../store/actions/cartAction.js'
import { styles } from "./styles";

function Cart({navigation}){
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);

    function onDelete(id){
        Alert.alert(
            "Usted está a punto de eliminar un producto",
            "Desea continuar?",
        [
            {
                text: "Cancelar",
                onPress: () => null,
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
        Alert.alert(
            'Compra realizada',
            'Su orden fue generada con éxito',
            [
                { text: "Ir a mis ordenes", onPress: () => navigation.navigate("Orders")  },
                {},
                { text: "Ok" },
            ]
        )
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
                <View style={styles.total}>
                    <Text style={styles.totalText}>Total:          ${total}</Text>
                </View>
                <TouchableOpacity style={styles.buttonConfirm} onPress={onConfirm} disabled={items.length === 0}>
                    <Text style={styles.textButtonConfirm}>Finalizar compra</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Cart;