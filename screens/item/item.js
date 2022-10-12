import React from "react";
import { Text } from 'react-native';
import products from "../../constants/data/products";

function Item({navigation, route}){
    const { productId }=route.params;
    const productFiltered= products.find(product=>product.id === productId)
    return(
        <Text>{productFiltered.description}</Text>
    )
}

export default Item;