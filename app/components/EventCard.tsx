/**
 * EventCard.tsx — ICEPASS Design System v1.0
 *
 * Card événement avec :
 *   • Image 16:9 + overlay dégradé sombre (glassmorphism)
 *   • Badge (Top Deal / Vérifié / Compte à rebours)
 *   • Titre, sous-titre, prix
 *   • Bouton "Acheter" → IceButton  (i18n)
 *   • NativeWind classes
 *   • Variants : "horizontal" (liste) | "vertical" (grid)
 *
 * @example
 *   <EventCard
 *     image={require('@/assets/concert.jpg')}
 *     title="Festival XXX"
 *     subtitle="Aapmonestr • 1 min"
 *     price="27,9€"
 *     badge="Top Deal"
 *     onPress={fn}
 *   />
 */

import React, { useRef } from 'react';
import { Animated, Image, ImageSourcePropType, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import { IceButton } from './Icebutton';

/* ─── Types ──────────────────────────────────────────────────────────── */
export type EventCardVariant = 'vertical' | 'horizontal';
export type EventBadge = 'top-deal' | 'verified' | 'countdown' | null;

export interface EventCardProps {
  image: ImageSourcePropType;
  title: string;
  subtitle?: string;
  price?: string;
  priceColor?: string;
  badge?: EventBadge;

  countdown?: string;
  variant?: EventCardVariant;
  onPress: () => void;
  /** Callback bouton "Acheter" — si absent, pas de bouton */
  onBuy?: () => void;
  className?: string;
}

/* ─── Badge config ───────────────────────────────────────────────────── */
const BADGE_CFG = {
  'top-deal': {
    icon: 'flash',
    color: '#FFB800',
    bg: 'rgba(255,184,0,0.18)',
    tKey: 'event.topDeal',
    label: 'Top Deal',
  },
  verified: {
    icon: 'shield-checkmark',
    color: '#00F0FF',
    bg: 'rgba(0,240,255,0.15)',
    tKey: 'event.verified',
    label: 'Vérifié',
  },
  countdown: {
    icon: 'time-outline',
    color: '#FF4757',
    bg: 'rgba(255,71,87,0.18)',
    tKey: null,
    label: '',
  },
};

/* ─── Composant ──────────────────────────────────────────────────────── */
export function EventCard({
  image,
  title,
  subtitle,
  price,
  priceColor = '#00F0FF',
  badge = null,
  countdown,
  variant = 'vertical',
  onPress,
  onBuy,
  className = '',
}: EventCardProps) {
  const { t } = useTranslation();
  const scale = useRef(new Animated.Value(1)).current;

  const pressIn = () =>
    Animated.spring(scale, { toValue: 0.97, useNativeDriver: true, friction: 8 }).start();
  const pressOut = () =>
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, friction: 8 }).start();

  const bdg = badge ? BADGE_CFG[badge] : null;

  /* ── Variante VERTICALE (grid) ── */
  if (variant === 'vertical') {
    return (
      <Animated.View
        className={`overflow-hidden rounded-lg border border-white/[0.07] bg-bg-card-dark ${className}`}
        style={{ transform: [{ scale }] }}>
        <TouchableOpacity
          onPress={onPress}
          onPressIn={pressIn}
          onPressOut={pressOut}
          activeOpacity={1}>
          <View style={{ width: '100%', aspectRatio: 16 / 9, overflow: 'hidden' }}>
            <Image source={image} style={{ width: '100%', height: '100%' }} resizeMode="cover" />

            {/* Overlay dégradé sombre */}
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.72)']}
              start={{ x: 0, y: 0.4 }}
              end={{ x: 0, y: 1 }}
              style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
            />

            {/* Badge en haut à gauche */}
            {bdg && (
              <View
                className="absolute left-2 top-2 flex-row items-center gap-x-1 rounded-full px-2 py-1"
                style={{ backgroundColor: bdg.bg }}>
                <Ionicons name={bdg.icon as any} size={11} color={bdg.color} />
                <Text className="text-[10px] font-semibold" style={{ color: bdg.color }}>
                  {badge === 'countdown'
                    ? countdown
                    : bdg.tKey
                      ? String(t(bdg.tKey, bdg.label))
                      : bdg.label}
                </Text>
              </View>
            )}

            {/* Prix en bas à droite sur l'image */}
            {price && (
              <View className="absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-[3px]">
                <Text className="text-[13px] font-bold" style={{ color: priceColor }}>
                  {price}
                </Text>
              </View>
            )}
          </View>

          {/* ── Infos ── */}
          <View className="gap-y-1 px-3 py-3">
            <Text
              className="font-poppins text-[14px] font-semibold text-text-main-dark"
              numberOfLines={1}>
              {title}
            </Text>
            {subtitle && (
              <Text className="text-[11px] text-text-muted-dark" numberOfLines={1}>
                {subtitle}
              </Text>
            )}

            {/* Bouton Acheter */}
            {onBuy && (
              <View className="mt-2">
                <IceButton
                  tKey="event.buy"
                  label="Acheter"
                  variant="primary"
                  size="sm"
                  onPress={onBuy}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }

  /* ── Variante HORIZONTALE (liste Market) ── */
  return (
    <Animated.View
      className={`flex-row overflow-hidden rounded-lg border border-white/[0.07] bg-bg-card-dark ${className}`}
      style={{ transform: [{ scale }] }}>
      <TouchableOpacity
        onPress={onPress}
        onPressIn={pressIn}
        onPressOut={pressOut}
        activeOpacity={1}
        className="flex-1 flex-row">
        {/* Vignette image */}
        <View style={{ height: 90, width: 110, overflow: 'hidden' }}>
          <Image source={image} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.55)']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
          />
          {bdg && (
            <View
              className="absolute left-1 top-1 flex-row items-center gap-x-1 rounded-full px-[6px] py-[2px]"
              style={{ backgroundColor: bdg.bg }}>
              <Ionicons name={bdg.icon as any} size={9} color={bdg.color} />
            </View>
          )}
        </View>

        {/* Infos */}
        <View className="flex-1 justify-between px-3 py-2">
          <View>
            <Text
              className="font-poppins text-[13px] font-semibold text-text-main-dark"
              numberOfLines={1}>
              {title}
            </Text>
            {subtitle && (
              <Text className="mt-[2px] text-[11px] text-text-muted-dark" numberOfLines={1}>
                {subtitle}
              </Text>
            )}
          </View>

          <View className="mt-1 flex-row items-center justify-between">
            {price && (
              <Text className="text-[15px] font-bold" style={{ color: priceColor }}>
                {price}
              </Text>
            )}
            {onBuy && (
              <IceButton
                tKey="event.buy"
                label="Acheter"
                variant="primary"
                size="xs"
                fullWidth={false}
                onPress={onBuy}
              />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
