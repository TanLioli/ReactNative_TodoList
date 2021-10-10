import React, {useState} from 'react'
import {View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState([])

    const pressHandler = () => {
        if(value.trim()) {
        onSubmit(value)
        setValue('')
        } else {
            Alert.alert('Список пуст')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
                        onChangeText={setValue}
                        value={value}
                        placeholder='Введите название....'/>
            <Button title='Добавить' onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     marginBottom: 15
    }, 
    input: {
        width: 272,
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
  });
  