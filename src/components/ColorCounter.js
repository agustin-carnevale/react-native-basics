import React from 'react'
import {View, Text,Button} from 'react-native'




const ColorCounter = ({colorName, colorValue, setColor})=>{

    return(
    <View>
        <Text>{colorName}:</Text>
        <Button 
            title={`More ${colorName}`}
            onPress={()=>{
                if(colorValue <255) setColor(colorValue+1) 
            }}
        />
        <Button 
            title={`Less ${colorName}`}
            onPress={()=>{
                if(colorValue > 0) setColor(colorValue-1) 
            }}
        />
    </View>
    )
}

export default ColorCounter