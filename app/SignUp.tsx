import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { IceButton } from '@/app/components/Icebutton';
import { Colors } from '@/constants/token';
import { useRouter } from 'expo-router';
import { Background } from '@/app/components/Background';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  return (
    <Background>
      <View style={{ flex: 1 }}>
        {/* ── HAUT : ICEPASS ── */}
        <View style={styles.topSection}>
          <Text style={styles.brand}>ICEPASS</Text>
          <Text style={styles.brandSub}>Crée ton compte</Text>
        </View>

        {/* ── FOND BLANC ── */}
        <View style={styles.cardFirstContain}>
          <View style={styles.bottomCard}>
            <Text style={styles.cardTitle}>Inscription</Text>
            <Text style={styles.cardSub}>Rejoins ICEPASS dès maintenant</Text>

            {/* Champs */}
            <View style={styles.fieldsWrap}>
              <View style={styles.inputWrap}>
                <Text style={styles.inputLabel}>Nom complet</Text>
                <TextInput
                  style={styles.input}
                  value={name}
                  onChangeText={setName}
                  placeholder="Jean Dupont"
                  placeholderTextColor="#CBD5E1"
                  autoCapitalize="words"
                />
              </View>

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

              <View style={styles.inputWrap}>
                <Text style={styles.inputLabel}>Mot de passe</Text>
                <TextInput
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="••••••••"
                  placeholderTextColor="#CBD5E1"
                  secureTextEntry
                />
              </View>
            </View>

            {/* Bouton S'inscrire */}
            <View style={styles.btnWrap}>
              <IceButton
                label="S'inscrire"
                variant="ice"
                size="md"
                onPress={() => router.replace('/(tabs)')}
              />
            </View>

            {/* Retour connexion */}
            <TouchableOpacity
              style={styles.loginRow}
              activeOpacity={0.7}
              onPress={() => router.replace('/login')}>
              <Text style={styles.loginText}>Déjà un compte ? </Text>
              <Text style={styles.loginLink}>Se connecter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
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

  fieldsWrap: { gap: 14, marginBottom: 20 },

  inputWrap: {},
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

  btnWrap: { marginBottom: 16 },

  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: { fontSize: 13, color: '#94A3B8' },
  loginLink: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primaryBlue,
    textDecorationLine: 'underline',
  },
});
