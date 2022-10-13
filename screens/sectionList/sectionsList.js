import React from 'react';
import { FlatList } from 'react-native';
// import GenericButton from '../../components/button';
import CategoryItem from '../../components/categoryItem/categoryItem';
// import  sections from "../../constants/data/sections";
import { useSelector } from 'react-redux';

function SectionsList({navigation}){
    // accedo a los datos del store con el useSelector//
    const categoriesList = useSelector((state)=>state.section.sections)


    function onSelected(item){
        navigation.navigate('Products', {name: item.name, sectionId: item.id})
    }
    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected}/>
    return(
        <FlatList
            // data={sections}
            data={categoriesList}
            renderItem={renderItem}
            keyExtractor={item=>item.id.toString()}
        />
    )
}

export default SectionsList;