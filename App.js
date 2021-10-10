import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { AddTodo } from './src/AddTodo';
import {Navbar} from './src/Navbar'
import { Todo } from './src/Todo';

export default function App(props) {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }] )
  }

  return (
    <View>
      <Navbar title='App IOS, Android'/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>

        <View>
          {todos.map(todo => {
            return <Todo todo={todo} key={todo.id}/>
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingVertical: 0
  }
});

