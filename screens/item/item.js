import React from "react";
import { Text } from 'react-native';
import { useSelector } from 'react-redux'

function Item(){

const productFiltered=useSelector((state)=> state.product.selected)

    return(
        <Text>{productFiltered.description}</Text>
    )
}

export default Item;