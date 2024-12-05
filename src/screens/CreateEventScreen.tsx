// src/screens/CreateEventScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CreateEventScreenProps {
  navigation: any;
}

const CreateEventScreen: React.FC<CreateEventScreenProps> = ({ navigation }) => {
  const [newEvent, setNewEvent] = useState('');

  const saveEvent = async () => {
    if (!newEvent) {return;}

    try {
      // Завантажуємо список подій
      const storedEvents = await AsyncStorage.getItem('events');
      const events = storedEvents ? JSON.parse(storedEvents) : [];

      // Додаємо нову подію
      events.push(newEvent);

      // Зберігаємо список подій
      await AsyncStorage.setItem('events', JSON.stringify(events));

      // Очищаємо поле вводу
      setNewEvent('');

      // Повертаємося на головний екран
      navigation.navigate('Home', { updated: true });
    } catch (error) {
      console.error('Failed to save event', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newEvent}
        onChangeText={setNewEvent}
        placeholder="Назва нової події"
      />
      <Button title="Зберегти подію" onPress={saveEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default CreateEventScreen;
