import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const CartItem = ({ item, onDelete }) => {
    return (
        <View >
            <View style={styles.containerProduct}>
                <Image
                    source={{ uri: `${item.img}` }}
                    style={{width: 100, height: 120}} 
                />
                <View style={styles.detail}>
                    <Text style={styles.title}>{item.name}</Text>
                    <View>
                        <Text style={styles.priceDetail}>Color: {item.color}</Text>
                        <Text style={styles.priceDetail}>Talle: {item.size}</Text>
                        <Text style={styles.priceDetail}>Precio: $ {item.price}</Text>
                        <View style={styles.buttonDeleteContainer}>
                            <Text style={styles.priceDetail}>Unidades: {item.quantity}</Text>
                            <TouchableOpacity onPress={() => onDelete(item.id)} style={styles.icon}>
                                <Ionicons name="trash" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CartItem;