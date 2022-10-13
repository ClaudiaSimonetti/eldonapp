import React from "react";
import { FlatList } from 'react-native';
import  products from "../../constants/data/products";
import ProductItem from "../../components/productItem/productItem";
import { useSelector} from 'react-redux'

function Products({navigation}){
    const selectedCategory = useSelector((state)=>state.section.selected)
    console.warn('soy selectedCaegory', selectedCategory)
    // const { sectionId } = route.params;
    // const productsFiltered = products.filter(product=> product.sectionId === sectionId)
    const productsFiltered = products.filter(product=> product.sectionId === selectedCategory.id)
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