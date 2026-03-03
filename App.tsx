import React from 'react';
import { ExpoRoot } from 'expo-router';
import { ImageBackground } from 'react-native';
import splashs from './assets/splashs.png';

export default function App() {
  const ctx = require.context('./app');
  return (
    <ImageBackground source={splashs} style={{ flex: 1 }} resizeMode="cover">
      <ExpoRoot context={ctx} />
    </ImageBackground>
  );
}
