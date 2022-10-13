import React from "react";
import { Text } from 'react-native';
import products from "../../constants/data/products";
import {useSelector} from 'react-redux'

function Item({navigation, route}){
const productFiltered=useSelector((state)=> state.product.selected)
    // const { productId }=route.params;
    // const productFiltered= products.find(product=>product.id === productId)
    return(
        <Text>{productFiltered.description}</Text>
    )
}

export default Item;