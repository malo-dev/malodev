import React, { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IceButton } from '@/app/components/Icebutton';
import { Background } from '@/app/components/Background';
import { OnboardingArtist } from './OnboardingArtist';
import { Colors } from '@/constants/token';

const GENRES = [
  'Fitness',
  'Cuisine',
  'Randonnée',
  'Dernière',
  'Clar sala',
  'Séries',
  'Tennis',
  'Jaghécarte',
  'Voir Après',
];

export default function Onboarding() {
  const [selected, setSelected] = useState<string[]>([GENRES[0]]);
  const [showArtist, setShowArtist] = useState(false);

  /* ── Valeurs d'animation ── */
  const slideOut = useRef(new Animated.Value(0)).current; // écran 1 : 0 = visible, -1 = sorti à gauche
  const slideIn = useRef(new Animated.Value(1)).current; // écran 2 : 1 = hors écran droite, 0 = visible

  const toggle = (genre: string) => {
    setSelected((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const goNext = () => {
    /* Lance les deux animations en parallèle */
    Animated.parallel([
      Animated.timing(slideOut, {
        toValue: -1,
        duration: 380,
        useNativeDriver: true,
      }),
      Animated.timing(slideIn, {
        toValue: 0,
        duration: 380,
        useNativeDriver: true,
      }),
    ]).start(() => setShowArtist(true));
  };

  return (
    <Background>
      <View style={styles.root}>
        {/* ══ ÉCRAN 1 — Genres (glisse vers la gauche) ══ */}
        {!showArtist && (
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {
                transform: [
                  {
                    translateX: slideOut.interpolate({
                      inputRange: [-1, 0],
                      outputRange: ['-100%', '0%'],
                    }),
                  },
                ],
              },
            ]}>
            <View style={styles.screen}>
              <View style={styles.topSection}>
                <Text style={styles.title}>Onboarding</Text>
              </View>

              <View style={styles.cardFirstContain}>
                <View style={styles.bottomCard}>
                  <Text style={styles.cardTitle}>Select une genre</Text>
                  <Text style={styles.cardSub}>( 5 genres au moins )</Text>

                  <View style={styles.tagsWrap}>
                    {GENRES.map((genre) => {
                      const isOn = selected.includes(genre);
                      return (
                        <TouchableOpacity
                          key={genre}
                          activeOpacity={0.75}
                          onPress={() => toggle(genre)}
                          style={[styles.tag, isOn && styles.tagSelected]}>
                          <Text style={[styles.tagText, isOn && styles.tagTextSelected]}>
                            {genre}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </View>

                  <View style={styles.btnSelect}>
                    <IceButton
                      tKey="common.select"
                      label="Select"
                      variant="ice"
                      size="md"
                      onPress={goNext}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Animated.View>
        )}

        {/* ══ ÉCRAN 2 — Artistes (glisse depuis la droite) ══ */}
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            {
              transform: [
                {
                  translateX: slideIn.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ],
            },
          ]}
          pointerEvents={showArtist ? 'auto' : 'none'}>
          <OnboardingArtist />
        </Animated.View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    overflow: 'hidden',
  },

  screen: {
    flex: 1,
  },

  topSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },

  cardFirstContain: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingBottom: 40,
  },

  bottomCard: {
    marginTop: -40,
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 32,
    paddingHorizontal: 24,
    paddingTop: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A2E',
    textAlign: 'center',
    marginBottom: 4,
  },

  cardSub: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 20,
  },

  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  tag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(0,102,255,0.07)',
    borderWidth: 1.5,
    borderColor: Colors.outline,
  },

  tagSelected: {
    backgroundColor: Colors.primaryBlue,
    borderColor: Colors.primaryBlue,
  },

  tagText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.outline,
  },

  tagTextSelected: {
    color: '#FFFFFF',
  },

  btnSelect: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
});
