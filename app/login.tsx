import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated } from 'react-native';
import { IceButton } from '@/app/components/Icebutton';
import { Colors } from '@/constants/token';
import { SignUp } from './SignUp';
import { Background } from '@/app/components/Background';
import { useRouter } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [showSignUp, setShowSignUp] = useState(false);
  const router = useRouter();

  const slideOut = useRef(new Animated.Value(0)).current;
  const slideIn = useRef(new Animated.Value(1)).current;

  const goSignUp = () => {
    Animated.parallel([
      Animated.timing(slideOut, { toValue: -1, duration: 380, useNativeDriver: true }),
      Animated.timing(slideIn, { toValue: 0, duration: 380, useNativeDriver: true }),
    ]).start(() => setShowSignUp(true));
  };

  return (
    <Background>
      <View style={styles.root}>
        {/* ══ ÉCRAN LOGIN ══ */}
        {!showSignUp && (
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
            <View style={{ flex: 1 }}>
              {/* ── HAUT : ICEPASS ── */}
              <View style={styles.topSection}>
                <Text style={styles.brand}>ICEPASS</Text>
                <Text style={styles.brandSub}>Your secure gateway</Text>
              </View>

              {/* ── FOND BLANC ── */}
              <View style={styles.cardFirstContain}>
                <View style={styles.bottomCard}>
                  <Text style={styles.cardTitle}>Connexion</Text>
                  <Text style={styles.cardSub}>Connecte-toi pour continuer</Text>

                  {/* ── Champ email ── */}
                  <View style={styles.inputWrap}>
                    <Text style={styles.inputLabel}>Email</Text>
                    <TextInput
                      style={styles.input}
                      value={email}
                      onChangeText={setEmail}
                      placeholder="exemple@email.com"
                      placeholderTextColor="#CBD5E1"
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>

                  {/* ── 4 boutons sociaux ── */}
                  <View style={styles.socialWrap}>
                    {/* 1. Google — bg blanc, texte sombre, icône G */}
                    <IceButton
                      label="Connecter avec Google"
                      variant="white"
                      size="md"
                      leftIcon={<Text style={styles.iconGoogle}>G</Text>}
                      onPress={() => {}}
                    />

                    {/* 2. Apple — bg noir */}
                    <TouchableOpacity
                      style={[styles.socialBtn, styles.appleBtn]}
                      activeOpacity={0.85}>
                      <Text style={styles.appleIcon}></Text>
                      <Text style={styles.socialBtnText}>Connecter avec Apple</Text>
                    </TouchableOpacity>

                    {/* 3. Facebook — bg bleu FB */}
                    <TouchableOpacity style={[styles.socialBtn, styles.fbBtn]} activeOpacity={0.85}>
                      <Text style={styles.fbIcon}>f</Text>
                      <Text style={styles.socialBtnText}>Connecter avec Facebook</Text>
                    </TouchableOpacity>

                    {/* 4. Se connecter — ice gradient */}
                    <IceButton
                      label="Se connecter"
                      variant="ice"
                      size="md"
                      onPress={() => router.replace('/(tabs)')}
                    />
                  </View>

                  {/* ── Lien inscription ── */}
                  <TouchableOpacity style={styles.signUpRow} onPress={goSignUp} activeOpacity={0.7}>
                    <Text style={styles.signUpText}>Pas de compte ? </Text>
                    <Text style={styles.signUpLink}>{"S'inscrire"}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Animated.View>
        )}

        {/* ══ ÉCRAN SIGN UP ══ */}
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
          pointerEvents={showSignUp ? 'auto' : 'none'}>
          <SignUp />
        </Animated.View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, overflow: 'hidden' },

  topSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  brand: {
    fontSize: 40,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 8,
    textShadowColor: 'rgba(0,240,255,0.40)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },

  brandSub: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(255,255,255,0.35)',
    letterSpacing: 3,
    textTransform: 'uppercase',
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
    fontSize: 20,
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

  /* Input email */
  inputWrap: { marginBottom: 20 },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#1A1A2E',
    backgroundColor: '#F8FAFC',
  },

  /* Boutons sociaux */
  socialWrap: { gap: 10 },

  socialBtn: {
    height: 50,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  /* Apple — noir */
  appleBtn: { backgroundColor: '#000000' },
  appleIcon: { fontSize: 18, color: '#FFFFFF', lineHeight: 22 },

  /* Facebook — bleu FB */
  fbBtn: { backgroundColor: '#1877F2' },
  fbIcon: { fontSize: 18, color: '#FFFFFF', fontWeight: '800', lineHeight: 22 },

  socialBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },

  /* Google icon dans IceButton */
  iconGoogle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#EA4335',
    lineHeight: 20,
  },

  /* Lien S'inscrire */
  signUpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  signUpText: { fontSize: 13, color: '#94A3B8' },
  signUpLink: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primaryBlue,
    textDecorationLine: 'underline',
  },
});
