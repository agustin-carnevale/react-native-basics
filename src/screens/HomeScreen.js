import React from "react";
import { 
  Text, 
  StyleSheet, 
  Button, 
  View,
  TouchableOpacity
} from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button 
        title="Go to Components Screen"
        onPress={()=>props.navigation.navigate('Components')}
      />
      <Button 
        title="Go to List Screen"
        onPress={()=>props.navigation.navigate('List')}
      />
      <Button 
        title="Go to Image Screen"
        onPress={()=>props.navigation.navigate('Image')}
      />
      <Button 
        title="Go to Colors Screen"
        onPress={()=>props.navigation.navigate('Colors')}
      />
      <Button 
        title="Go to ColorPicker"
        onPress={()=>props.navigation.navigate('ColorPicker')}
      />
      <Button 
        title="Go to Name Input"
        onPress={()=>props.navigation.navigate('NameInput')}
      />
      {/* <TouchableOpacity
        onPress={()=>props.navigation.navigate('List')}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
})

export default HomeScreen;

