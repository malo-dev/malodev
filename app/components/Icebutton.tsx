/**
 * IceButton.tsx — ICEPASS Design System v1.0
 * 100% StyleSheet — utilise les tokens de Colors
 */

import React, { useRef } from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTranslation } from 'react-i18next';
import { Colors } from '@/constants/token'; /* ← source unique de vérité */

/* ─── Types ── */
export type IceVariant = 'primary' | 'outline' | 'ghost' | 'white' | 'danger' | 'ice';
export type IceSize = 'xs' | 'sm' | 'md' | 'lg';

export interface IceButtonProps {
  tKey?: string;
  label?: string;
  onPress: () => void;
  variant?: IceVariant;
  size?: IceSize;
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  style?: object;
}

/* ── Hauteurs / radius / padding selon size ── */
const SIZE_STYLES: Record<
  IceSize,
  { height: number; borderRadius: number; paddingHorizontal: number }
> = {
  xs: { height: 34, borderRadius: 10, paddingHorizontal: 14 },
  sm: { height: 42, borderRadius: 12, paddingHorizontal: 18 },
  md: { height: 50, borderRadius: 14, paddingHorizontal: 26 },
  lg: { height: 58, borderRadius: 16, paddingHorizontal: 32 },
};

const FONT_SIZE: Record<IceSize, number> = { xs: 11, sm: 13, md: 15, lg: 16 };

/* ── Config par variant — toutes les couleurs viennent de Colors ── */
type VariantCfg = {
  containerStyle: object;
  labelStyle: object;
  gradient?: readonly [string, string, ...string[]];
  spinColor: string;
};

const VARIANTS: Record<IceVariant, VariantCfg> = {
  primary: {
    containerStyle: { backgroundColor: Colors.primaryBlue, overflow: 'hidden' },
    labelStyle: { color: Colors.textMainDark, fontWeight: '700', letterSpacing: 0.5 },
    spinColor: Colors.textMainDark,
  },
  outline: {
    containerStyle: {
      borderWidth: 1.5,
      borderColor: Colors.outline,
      backgroundColor: 'rgba(66,165,245,0.10)',
    },
    labelStyle: { color: Colors.outline, fontWeight: '600', letterSpacing: 0.4 },
    spinColor: Colors.outline,
  },
  ghost: {
    containerStyle: { backgroundColor: 'transparent' },
    labelStyle: { color: Colors.outline, fontWeight: '600', letterSpacing: 0.4 },
    spinColor: Colors.outline,
  },
  white: {
    containerStyle: { backgroundColor: Colors.bgCardLight },
    labelStyle: { color: Colors.primaryBlue, fontWeight: '700', letterSpacing: 0.4 },
    spinColor: Colors.primaryBlue,
  },
  danger: {
    containerStyle: { overflow: 'hidden' },
    labelStyle: { color: Colors.textMainDark, fontWeight: '700', letterSpacing: 0.5 },
    gradient: Colors.gradientDanger,
    spinColor: Colors.textMainDark,
  },
  ice: {
    containerStyle: { overflow: 'hidden' },
    labelStyle: { color: Colors.textMainDark, fontWeight: '700', letterSpacing: 0.5 },
    gradient: Colors.gradientIce /* #00F0FF → #0066FF */,
    spinColor: Colors.textMainDark,
  },
};

/* ─── Composant ── */
export function IceButton({
  tKey,
  label = 'OK',
  onPress,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = true,
  style,
}: IceButtonProps) {
  const { t } = useTranslation();
  const scale = useRef(new Animated.Value(1)).current;
  const cfg = VARIANTS[variant];
  const sizing = SIZE_STYLES[size];
  const isOff = disabled || isLoading;
  const text = tKey ? String(t(tKey, label)) : label;

  const pressIn = () =>
    Animated.spring(scale, { toValue: 0.96, useNativeDriver: true, friction: 6 }).start();
  const pressOut = () =>
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, friction: 6 }).start();

  const Inner = () => (
    <View style={styles.inner}>
      {leftIcon}
      {isLoading ? (
        <ActivityIndicator size="small" color={cfg.spinColor} />
      ) : (
        <Text style={[styles.label, cfg.labelStyle, { fontSize: FONT_SIZE[size] }]}>{text}</Text>
      )}
      {!isLoading && rightIcon}
    </View>
  );

  const containerStyle = [
    styles.container,
    cfg.containerStyle,
    {
      height: sizing.height,
      borderRadius: sizing.borderRadius,
      paddingHorizontal: sizing.paddingHorizontal,
    },
  ];

  return (
    <Animated.View
      style={[
        fullWidth ? styles.fullWidth : styles.selfStart,
        isOff && styles.disabled,
        { transform: [{ scale }] },
        style,
      ]}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={pressIn}
        onPressOut={pressOut}
        disabled={isOff}
        activeOpacity={1}>
        {cfg.gradient ? (
          <LinearGradient
            colors={cfg.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={containerStyle}>
            <Inner />
          </LinearGradient>
        ) : (
          <View style={containerStyle}>
            <Inner />
          </View>
        )}
      </TouchableOpacity>
    </Animated.View>
  );
}

/* ─── Styles ── */
const styles = StyleSheet.create({
  fullWidth: { width: '100%' },
  selfStart: { alignSelf: 'flex-start' },
  disabled: { opacity: 0.5 },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  label: {
    fontFamily: 'Poppins',
  },
});
