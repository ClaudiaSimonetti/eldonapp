import React from "react";
import { View,Text,TouchableOpacity, FlatList } from 'react-native';
import  products from "../../constants/data/products";
import ProductItem from "../../components/productItem/productItem";

function Products({navigation, route, onSelected}){
    const { sectionId } = route.params;
    const productsFiltered = products.filter(product=> product.sectionId === sectionId)
    function onSelected(item){
        navigation.navigate('Item', {name: item.name, productId: item.id})
    }
    const renderItem = ({item})=><ProductItem item={item} onSelected={onSelected}/>
    return(
        <FlatList
            data={productsFiltered}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default Products;