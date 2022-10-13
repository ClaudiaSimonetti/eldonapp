import React, { useEffect } from "react";
import { FlatList } from 'react-native';
import ProductItem from "../../components/productItem/productItem";
import { useDispatch, useSelector} from 'react-redux'
import { filteredProducts, selectedProduct } from "../../store/actions/productsAction";

function Products({navigation}){

    const dispatch=useDispatch();

    const selectedCategory = useSelector((state)=>state.section.selected)

    const productsFiltered = useSelector((state)=>state.product.filteredProducts)

    useEffect(()=>{
        dispatch(filteredProducts(selectedCategory.id))
    },[])

    function onSelected(item){
        dispatch(selectedProduct(item.id))
        navigation.navigate('Item', {name: item.name})
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