// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import Background from '../components/Background'; // Імпортуємо компонент фону

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Background>
    <View style={styles.container}>

      <Text style={styles.title}>Мои события</Text>

      <View style={styles.buttonContainer}>
        {/* Кнопка до TodoList1 */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TodoList1', { listId: 1 })}
        >
          <Text style={styles.buttonText}>Оплата рахунків</Text>
        </TouchableOpacity>

        {/* Кнопка до TodoList2 */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TodoList2', { listId: 2 })}
        >
          <Text style={styles.buttonText}>Заробітна плата</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        {/* Поки що без дії */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Інвестиційний вклад</Text>
        </TouchableOpacity>

        {/* Плюсик (без дії) */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Нова подія</Text>
        </TouchableOpacity>
      </View>

      {/* Зображення внизу */}
      <Image source={require('../assets/images/image69.png')} style={styles.bottomImage} />
    </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 42,
    height: 42,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginTop: 20,
  },
});

export default HomeScreen;
