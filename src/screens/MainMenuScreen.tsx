// src/screens/MainMenuScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Background from '../components/Background'; // Імпортуємо компонент фону

const MainMenuScreen: React.FC = ({ navigation }: any) => {
  const handleNavigation = () => {
    navigation.navigate('Home'); // Перехід на HomeScreen
  };

  return (
    <Background>
      <View style={styles.container}>

        {/* Кнопка "Мої події" */}
        <TouchableOpacity style={styles.button} onPress={handleNavigation}>
          <Image source={require('../assets/images/calendar.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Мои события</Text>
        </TouchableOpacity>

        {/* Кнопка "Мої бюджети" */}
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/images/money2text.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Мои бюджеты</Text>
        </TouchableOpacity>

        {/* Кнопка "Мої витрати" */}
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/images/money1text.png')} style={styles.icon} />
          <Text style={styles.buttonText}>Мои расходы</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '90%',
    marginBottom: 49,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    height: 200,
    width: '100%',
  },
  icon: {
    width: 84,
    height: 84,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
});

export default MainMenuScreen;
