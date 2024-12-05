// src/screens/TodoListScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Background from '../components/Background'; // Імпортуємо компонент фону

interface TodoListScreenProps {
  navigation: any;
  listId: number;
}

const TodoListScreen: React.FC<TodoListScreenProps> = ({ navigation, listId }) => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>Список Todo {listId}</Text>

        <Button
          title="Перейти до CreateTodo"
          onPress={() => navigation.navigate('CreateTodo1', { listId })}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
  },
});

export default TodoListScreen;
