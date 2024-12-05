import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface HeaderLeftButtonProps {
  onPressAction?: (navigation: any) => void; // Додаткове налаштування дії
}

const HeaderLeftButton: React.FC<HeaderLeftButtonProps> = ({ onPressAction }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPressAction) {
      onPressAction(navigation); // Виклик спеціальної дії
    } else {
      navigation.goBack(); // За замовчуванням повернення назад
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Image
        source={require('../assets/images/Back.01.png')} // Виправлений шлях до зображення
        style={styles.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute', // Розміщаємо кнопку поверх іншого контенту
    top: 20, // Відстань від верхнього краю екрана (можна налаштувати)
    left: 10, // Відстань від лівого краю екрана (можна налаштувати)
    zIndex: 1, // Перекриває інші елементи
    padding: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default HeaderLeftButton;

