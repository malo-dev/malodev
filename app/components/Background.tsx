import React from 'react';
import { ImageBackground, StyleProp, ViewStyle } from 'react-native';
import splash from '@/assets/splashs.png';

type Props = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

export function Background({ children, style }: Props) {
  return (
    <ImageBackground source={splash} style={[{ flex: 1 }, style]} resizeMode="cover">
      {children}
    </ImageBackground>
  );
}
