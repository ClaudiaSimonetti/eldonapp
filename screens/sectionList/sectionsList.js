import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
// import GenericButton from '../../components/button';
import CategoryItem from '../../components/categoryItem/categoryItem';
import  sections from "../../constants/data/sections";

function SectionsList({navigation}){
    function onSelected(item){
        navigation.navigate('Products', {name: item.name, sectionId: item.id})
    }
    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected}/>
    return(
        <FlatList
            data={sections}
            renderItem={renderItem}
            keyExtractor={item=>item.id.toString()}
        />
    )
}

export default SectionsList;