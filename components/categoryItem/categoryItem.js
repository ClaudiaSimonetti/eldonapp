import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from "./styles";

function CategoryItem({item, onSelected}){
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={()=>onSelected(item)}
                style={{...styles.contentContainer}}
            >
                <View>
                    <Image
                        source={{ uri: `${item.img}` }}
                        style={{width: 100, height: 100}} 
                    />
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryItem