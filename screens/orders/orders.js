import React, { useCallback } from "react";
import { View , FlatList, Alert} from "react-native";
import  OrderItem  from "../../components/orderItem/orderItem.js";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles";
import { deleteOrder, getOrders } from "../../store/actions/orderAction.js";
import { useFocusEffect } from "@react-navigation/native";

function Orders({navigation}){
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orders.list);

    useFocusEffect(
        useCallback(() => {
            dispatch(getOrders());
        }, [dispatch])
    );

    const onCancel = (id) => {
        Alert.alert(
            "¡Alerta! Usted está por eliminar una orden",
            "Desea eliminar la orden? Luego no podrá recuperarla",
            [
                { text: "Cancelar", onPress: () => null },
                {},
                { text: "Sí, deseo", onPress: () => dispatch(deleteOrder(id)) }
            ]
        );
    }
    const renderItem = ({item}) => {return <OrderItem item={item} onCancel={onCancel} />}
    return (
        <View style={styles.container}>
            <FlatList 
                data={orders}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

export default Orders;