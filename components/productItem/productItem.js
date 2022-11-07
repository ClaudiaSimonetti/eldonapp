import React from "react";
import { View,Text,TouchableOpacity, Image } from 'react-native'
import { styles } from "./styles";

function ProductItem({item, onSelected}){
    return(
        <View >
            <TouchableOpacity
                onPress={()=>onSelected(item)}
            >
                <View style={styles.container}>
                    <Image
                            source={{ uri: `${item.img}` }}
                            style={{width: 100, height: 100}} 
                        />
                    <View style={styles.detail}>
                        <Text style={styles.title}>{item.name}</Text>
                        <View>
                            <Text style={styles.priceDetail}>Color: {item.color}</Text>
                            <Text style={styles.priceDetail}>Talle: {item.size}</Text>
                            <Text style={styles.priceDetail}>Precio: $ {item.price}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem;