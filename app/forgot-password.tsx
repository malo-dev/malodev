import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ForgotPassword() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (!email.trim()) return;
    router.push({ pathname: '/otp', params: { email, mode: 'reset' } });
  };

  return (
    <Background>
      <View style={styles.topSection}>
        <Text style={styles.brand}>ICEPASS</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.cardFirstContain}>
        <View style={styles.bottomCard}>
          <View style={styles.content}>

            {/* Back */}
            <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={22} color="#64748B" />
            </TouchableOpacity>

            {/* Icon */}
            <View style={styles.iconCircle}>
              <Ionicons name="lock-open-outline" size={32} color="#3B82F6" />
            </View>

            <Text style={styles.heading}>Mot de passe oublié ?</Text>
            <Text style={styles.subheading}>
              Saisissez votre email ou numéro de téléphone. Nous vous enverrons un code de vérification.
            </Text>

            {/* Input */}
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Email / Téléphone"
              placeholderTextColor="#94A3B8"
              keyboardType="email-address"
              autoCapitalize="none"
              autoFocus
            />

            {/* Send */}
            <TouchableOpacity
              style={[styles.sendBtn, !email.trim() && styles.sendBtnDisabled]}
              activeOpacity={0.85}
              onPress={handleSend}>
              <Text style={styles.sendBtnText}>Envoyer le code</Text>
            </TouchableOpacity>

            {/* Back to login */}
            <TouchableOpacity onPress={() => router.back()} style={styles.loginRow}>
              <Ionicons name="arrow-back-outline" size={14} color="#64748B" />
              <Text style={styles.loginText}>Retour à la connexion</Text>
            </TouchableOpacity>

          </View>
        </View>
      </KeyboardAvoidingView>
    </Background>
  );
}

const styles = StyleSheet.create({
  topSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    fontSize: 38,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 10,
    fontStyle: 'italic',
    textShadowColor: 'rgba(0,200,255,0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 24,
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
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 16,
    gap: 16,
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 8,
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A2E',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 20,
  },
  input: {
    height: 52,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#1A1A2E',
    backgroundColor: '#F8FAFC',
  },
  sendBtn: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnDisabled: {
    backgroundColor: '#CBD5E1',
  },
  sendBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 4,
  },
  loginText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
  },
});
