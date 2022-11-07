import React from 'react';
import { FlatList } from 'react-native';
import CategoryItem from '../../components/categoryItem/categoryItem';
import { useSelector, useDispatch } from 'react-redux';
import { SelectSection } from '../../store/actions/sectionAction';

function SectionsList({navigation}){
    const dispatch = useDispatch();
    const categoriesList = useSelector((state)=>state.section.sections)
    function onSelected(item){
        dispatch(SelectSection(item.id))
        navigation.navigate('Products', {name: item.name})
    }
    const renderItem = ({item}) => <CategoryItem item={item} onSelected={onSelected}/>
    return(
        <FlatList
            data={categoriesList}
            renderItem={renderItem}
            keyExtractor={item=>item.id.toString()}
        />
    )
}

export default SectionsList;