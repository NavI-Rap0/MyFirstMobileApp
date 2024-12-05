// src/screens/CreateTodoScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CreateTodoScreenProps {
  route: any;
  navigation: any;
}

const CreateTodoScreen: React.FC<CreateTodoScreenProps> = ({ route, navigation }) => {
  const { listId } = route.params;
  const [newTodo, setNewTodo] = useState('');

  const saveTodo = async () => {
    if (!newTodo) { return; }

    try {
      // Завантажуємо список тудусів для даного списку
      const storedTodos = await AsyncStorage.getItem(`todos${listId}`);
      const todos = storedTodos ? JSON.parse(storedTodos) : [];

      // Додаємо новий туду до списку
      todos.push(newTodo);

      // Зберігаємо оновлений список в AsyncStorage
      await AsyncStorage.setItem(`todos${listId}`, JSON.stringify(todos));

      // Очищаємо поле вводу
      setNewTodo('');

      // Повертаємося на попередній екран і передаємо сигнал про оновлення
      navigation.navigate('TodoList' + listId);  // Повернення на екран списку і оновлення
    } catch (error) {
      console.error('Failed to save todo', error);
    }
  };

  return (
    <View>
      <TextInput
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="Enter new todo"
      />
      <Button title="Save Todo" onPress={saveTodo} />
    </View>
  );
};

export default CreateTodoScreen;

