import React from 'react';
import { Button } from 'react-native';

function GenericButton(props){
    console.log('soy props', props)
    return(
        <Button
            title={props.title}
            color={props.color}
            onPress={props.onPress}
        />
    )
}

export default GenericButton;