import React from 'react'
import  { Text, StyleSheet, FlatList} from 'react-native'

const DATA = [
    {name: 'Friend #1',age: '20'},
    {name: 'Friend #2',age: '38'},
    {name: 'Friend #3',age: '13'},
    {name: 'Friend #4',age: '42'},
    {name: 'Friend #5',age: '21'},
    {name: 'Friend #6',age: '18'},
    {name: 'Friend #7',age: '34'},
    {name: 'Friend #8',age: '8'},
   
]

const ListScreen = () => {

    return (
        <FlatList 
            showsVerticalScrollIndicator={false}
            keyExtractor={friend=> friend.name}
            data={DATA}
            renderItem={({item})=>{
                return <Text style={styles.textStyle}>{`${item.name} - Age: ${item.age}`}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen