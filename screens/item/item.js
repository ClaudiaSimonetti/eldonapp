import React from "react";
import { Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "../../store/actions/cartAction";

function Item({navigation, route}){

    const dispatch = useDispatch();

    const productFiltered = useSelector((state)=> state.product.selected)

//     function addCartItem(){
//     dispatch(addToCart(productFiltered))
// }
const addCartItem=()=>{
    dispatch(addToCart(productFiltered))
}

const {name, description, price, quantity} = productFiltered || {};
    return(
        <View>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text>{price}</Text>
            <Text>{quantity}</Text>
        
        <Button
            title="Add To cart"
            onPress={addCartItem}
        />
        </View>
    )
}

export default Item;