import React, {useState} from 'react'
import {View, Text, StyleSheet,Button} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const ColorPickerScreen = ()=>{
    const [red, setRed] = useState(255)
    const [green, setGreen] = useState(255)
    const [blue, setBlue] = useState(255)

    return (
        <View>
            <ColorCounter 
                colorName="Red"
                colorValue={red}
                setColor={setRed}
            />
            <ColorCounter 
                colorName="Green"
                colorValue={green}
                setColor={setGreen}
            />
            <ColorCounter 
                colorName="Blue"
                colorValue={blue}
                setColor={setBlue}
            />
            <View style={{height:100, width:100, backgroundColor: `rgb(${red},${green},${blue})`}}/>
            <Text>{`rgb(${red},${green},${blue})`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

})


export default ColorPickerScreen