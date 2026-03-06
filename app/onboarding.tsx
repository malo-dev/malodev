import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const { width: W } = Dimensions.get('window');

const GENRES = [
  'Musical', 'Genres', 'Restarmans', 'Gemers',
  'Carious', 'Snibs', 'Toronto', 'Reglessune',
  'New series',
];

const ARTISTS = [
  { id: '1', name: 'Famme artist' },
  { id: '2', name: 'Mania Relin' },
  { id: '3', name: 'Obcisions' },
  { id: '4', name: 'Maraia' },
  { id: '5', name: 'New fait' },
  { id: '6', name: 'Favors' },
];

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [selectedGenres, setSelectedGenres] = useState<string[]>(['Musical']);
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const slideX = useRef(new Animated.Value(0)).current;

  const goTo = (nextStep: number) => {
    const dir = nextStep > step ? -1 : 1;
    Animated.timing(slideX, { toValue: dir * W, duration: 340, useNativeDriver: true }).start(() => {
      setStep(nextStep);
      slideX.setValue(-dir * W);
      Animated.timing(slideX, { toValue: 0, duration: 340, useNativeDriver: true }).start();
    });
  };

  const toggleGenre = (g: string) =>
    setSelectedGenres((prev) => prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]);

  const toggleArtist = (id: string) =>
    setSelectedArtists((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  return (
    <Background>
      <Animated.View style={[styles.root, { transform: [{ translateX: slideX }] }]}>

        {/* ─── STEP 0 : SPLASH ─────────────────────────────── */}
        {step === 0 && (
          <View style={styles.splashScreen}>
            <View style={styles.splashCenter}>
              <Text style={styles.splashBrand}>ICEPASS</Text>
              <View style={styles.ticketWrap}>
                <View style={[styles.ticketCard, styles.ticketBack]}>
                  <Ionicons name="ticket" size={40} color="rgba(255,255,255,0.6)" />
                </View>
                <View style={[styles.ticketCard, styles.ticketFront]}>
                  <Ionicons name="ticket" size={40} color="#fff" />
                </View>
              </View>
            </View>

            <View style={styles.dotsRow}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>

            <TouchableOpacity style={styles.splashBtn} activeOpacity={0.85} onPress={() => goTo(1)}>
              <Text style={styles.splashBtnText}>Commencer</Text>
              <Ionicons name="arrow-forward" size={18} color="#1A1A2E" />
            </TouchableOpacity>
          </View>
        )}

        {/* ─── STEP 1 : GENRES ─────────────────────────────── */}
        {step === 1 && (
          <View style={styles.screen}>
            <View style={styles.topSection}>
              <Text style={styles.topTitle}>Onboarding</Text>
            </View>

            <View style={styles.cardFirstContain}>
              <View style={styles.bottomCard}>
                <Text style={styles.cardHeading}>Select une genre</Text>
                <Text style={styles.cardSub}>(5 genres musical)</Text>

                <View style={styles.tagsWrap}>
                  {GENRES.map((genre) => {
                    const on = selectedGenres.includes(genre);
                    return (
                      <TouchableOpacity
                        key={genre}
                        activeOpacity={0.75}
                        onPress={() => toggleGenre(genre)}
                        style={[styles.tag, on && styles.tagSelected]}>
                        <Text style={[styles.tagText, on && styles.tagTextSelected]}>{genre}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>

                <View style={styles.btnWrap}>
                  <TouchableOpacity
                    style={[styles.selectBtn, selectedGenres.length < 1 && styles.selectBtnDisabled]}
                    activeOpacity={0.85}
                    onPress={() => selectedGenres.length >= 1 && goTo(2)}>
                    <Text style={styles.selectBtnText}>Select</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}

        {/* ─── STEP 2 : ARTISTES ───────────────────────────── */}
        {step === 2 && (
          <View style={styles.screen}>
            <View style={styles.topSection}>
              <Text style={styles.topTitle}>Onboarding</Text>
            </View>

            <View style={styles.cardFirstContain}>
              <View style={styles.bottomCard}>
                <Text style={styles.cardHeading}>Select une artist</Text>
                <Text style={styles.cardSub}>(met ov favors)</Text>

                <View style={styles.tagsWrap}>
                  {ARTISTS.map((artist) => {
                    const on = selectedArtists.includes(artist.id);
                    return (
                      <TouchableOpacity
                        key={artist.id}
                        activeOpacity={0.75}
                        onPress={() => toggleArtist(artist.id)}
                        style={[styles.tag, on && styles.tagSelected]}>
                        <Text style={[styles.tagText, on && styles.tagTextSelected]}>{artist.name}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>

                <View style={styles.btnWrap}>
                  <TouchableOpacity
                    style={styles.selectBtn}
                    activeOpacity={0.85}
                    onPress={() => router.replace('/login')}>
                    <Text style={styles.selectBtnText}>Select</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}

      </Animated.View>
    </Background>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },

  /* ── Splash ── */
  splashScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 80,
    paddingHorizontal: 32,
  },
  splashCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 40,
  },
  splashBrand: {
    fontSize: 48,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 12,
    fontStyle: 'italic',
    textShadowColor: 'rgba(0,200,255,0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 32,
  },
  ticketWrap: {
    width: 120,
    height: 100,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticketCard: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ticketBack: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    transform: [{ rotate: '-14deg' }, { translateX: -14 }, { translateY: 10 }],
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  ticketFront: {
    backgroundColor: 'rgba(255,255,255,0.22)',
    transform: [{ rotate: '8deg' }],
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.45)',
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  dotActive: {
    width: 24,
    backgroundColor: '#fff',
  },
  splashBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 36,
    paddingVertical: 16,
    borderRadius: 50,
  },
  splashBtnText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1A1A2E',
  },

  /* ── Steps ── */
  screen: { flex: 1 },
  topSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  topTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#fff',
    letterSpacing: 0.3,
    textAlign: 'center',
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
  cardHeading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A2E',
    textAlign: 'center',
    marginBottom: 4,
  },
  cardSub: {
    fontSize: 13,
    color: '#94A3B8',
    textAlign: 'center',
    marginBottom: 24,
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: '#F1F5F9',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  tagSelected: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  tagText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#64748B',
  },
  tagTextSelected: {
    color: '#fff',
  },
  btnWrap: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
  selectBtn: {
    height: 54,
    borderRadius: 50,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectBtnDisabled: {
    backgroundColor: '#CBD5E1',
  },
  selectBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.3,
  },
});
