// src/components/Background.tsx
import React from 'react';
import { ImageBackground, Image, StyleSheet, ViewStyle } from 'react-native';

interface BackgroundProps {
  children: React.ReactNode; // Той контент, який ви хочете обгорнути
  style?: ViewStyle; // Додаткові стилі для контейнера, якщо потрібно
}

const Background: React.FC<BackgroundProps> = ({ children, style }) => {
  return (
    <ImageBackground
      source={require('../assets/images/backgr.png')} // Шлях до фону
      style={[styles.background, style]} // Стилі для фону
    >
      {/* Логотип на фоні */}
      <Image
        source={require('../assets/images/logo.png')} // Шлях до лого
        style={styles.logo}
      />
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute', // Логотип буде позиціонуватись поверх фону
    top: 54, // Можна налаштувати відстань від верхнього краю
    left: '50%',
    transform: [{ translateX: -50 }], // Центрування лого по горизонталі
    width: 87, // Налаштування розміру лого
    height: 61, // Налаштування розміру лого
  },
});

export default Background;
