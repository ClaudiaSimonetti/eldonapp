import React from "react";
import { Text, View, Image, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "../../store/actions/cartAction";
import GenericButton from "../../components/button/button"
import { styles } from "./styles";
import { colors } from "../../constants/colors/colors";

function Item({navigation, route}){
    const dispatch = useDispatch();
    const productFiltered = useSelector((state)=> state.product.selected)
    const addCartItem=()=>{
        dispatch(addToCart(productFiltered))
        Alert.alert(
            "Producto añadido",
            "Usted ha agregado un"+" "+ `${name}`+" "+ "a su carrito",
            [
                { text: "OK" }
            ]
        );
    }
    const {img, name, color, size, description, price, quantity} = productFiltered || {};
    return(
        <View>
            <Image
                source={{ uri: img }}
                style={{width: 400, height: 400}} 
            />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.priceDetail}>Color: {color}</Text>
            <Text style={styles.priceDetail}>Talle: {size}</Text>
            <Text style={styles.priceDetail}>{description}</Text>
            <Text style={styles.priceDetail}>Precio: $ {price}</Text>
            <Text>{quantity}</Text>
            <View style={styles.button}>
                <GenericButton
                    title="Añadir al carrito"
                    onPress={()=>addCartItem(name)}
                    color={colors.black}
                />
            </View>
        </View>
    )
}

export default Item;