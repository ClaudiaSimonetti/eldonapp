import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
// import { colors } from "../../constants/themes";
import { Ionicons } from "@expo/vector-icons";

const formDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const OrderItem = ({ item, onCancel }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>Orden N°: {item.id}</Text>
            </View>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>Fecha: {formDate(item.date)}</Text>
            </View>
            
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.total}>Total ${item.total}</Text>
                </View>
            <TouchableOpacity onPress={() => onCancel(item.id)}>
                <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderItem;