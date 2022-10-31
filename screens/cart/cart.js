import React, { FlatList, TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet } from 'react-native';
// import  cart  from '../../constants/data/cart.js'
import CartItem from '../../components/cartItem/cartItem.js';
import { useSelector, useDispatch } from 'react-redux';

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
        // console.warn(id)
    }
    const renderItem = ({item})=>
        <CartItem item={item} onDelete={onDelete}/>
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>AQUI VA EL CARRITO</Text>
            <View style={styles.container}>
                <FlatList
                    data={items}
                    renderItem={renderItem}
                    sytle={styles.container}
                    keyExtractor={item=>item.id.toString()}
                
                
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonConfirm} onPress={()=>null}>
                <Text style={styles.textButtonConfirm}>Confirm</Text>
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