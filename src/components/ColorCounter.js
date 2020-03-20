import React from 'react'
import {View, Text,Button} from 'react-native'

const ColorCounter = ({colorName, onIncrease, onDecrease})=>{

    return(
    <View>
        <Text>{colorName}:</Text>
        <Button 
            title={`More ${colorName}`}
            onPress={onIncrease}
        />
        <Button 
            title={`Less ${colorName}`}
            onPress={onDecrease}
        />
    </View>
    )
}

export default ColorCounter