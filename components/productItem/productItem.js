import React from "react";
import {View,Text,TouchableOpacity} from 'react-native'

function ProductItem({item, onSelected}){
    return(
        <View>
            <TouchableOpacity
                onPress={()=>onSelected(item)}
            >
                <Text>{item.name}</Text>
                <View>
                    <Text>{item.price}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem;