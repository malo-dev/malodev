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

export default function ResetPassword() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isValid = password.length >= 8 && password === confirm;

  const handleReset = () => {
    if (!isValid) return;
    router.replace('/login');
  };

  const getStrength = () => {
    if (password.length === 0) return null;
    if (password.length < 6) return { label: 'Faible', color: '#EF4444', width: '30%' };
    if (password.length < 10) return { label: 'Moyen', color: '#F59E0B', width: '60%' };
    return { label: 'Fort', color: '#22C55E', width: '100%' };
  };

  const strength = getStrength();

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
              <Ionicons name="key-outline" size={32} color="#3B82F6" />
            </View>

            <Text style={styles.heading}>Nouveau mot de passe</Text>
            <Text style={styles.subheading}>
              Choisissez un mot de passe sécurisé d'au moins 8 caractères.
            </Text>

            {/* New password */}
            <View style={styles.inputBox}>
              <TextInput
                style={[styles.input, { paddingRight: 48 }]}
                value={password}
                onChangeText={setPassword}
                placeholder="Nouveau mot de passe"
                placeholderTextColor="#94A3B8"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.eyeBtn}
                onPress={() => setShowPassword((v) => !v)}>
                <Ionicons
                  name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="#94A3B8"
                />
              </TouchableOpacity>
            </View>

            {/* Strength bar */}
            {strength && (
              <View style={styles.strengthWrap}>
                <View style={styles.strengthBarBg}>
                  <View style={[styles.strengthBarFill, { width: strength.width as any, backgroundColor: strength.color }]} />
                </View>
                <Text style={[styles.strengthLabel, { color: strength.color }]}>{strength.label}</Text>
              </View>
            )}

            {/* Confirm password */}
            <View style={styles.inputBox}>
              <TextInput
                style={[styles.input, { paddingRight: 48 }, confirm && confirm !== password ? styles.inputError : null]}
                value={confirm}
                onChangeText={setConfirm}
                placeholder="Confirmer le mot de passe"
                placeholderTextColor="#94A3B8"
                secureTextEntry={!showConfirm}
              />
              <TouchableOpacity
                style={styles.eyeBtn}
                onPress={() => setShowConfirm((v) => !v)}>
                <Ionicons
                  name={showConfirm ? 'eye-off-outline' : 'eye-outline'}
                  size={20}
                  color="#94A3B8"
                />
              </TouchableOpacity>
            </View>

            {confirm && confirm !== password && (
              <Text style={styles.errorText}>Les mots de passe ne correspondent pas</Text>
            )}

            {/* Submit */}
            <TouchableOpacity
              style={[styles.resetBtn, !isValid && styles.resetBtnDisabled]}
              activeOpacity={0.85}
              onPress={handleReset}>
              <Text style={styles.resetBtnText}>Réinitialiser</Text>
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
    gap: 14,
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
  inputBox: {
    position: 'relative',
    justifyContent: 'center',
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
  inputError: {
    borderColor: '#EF4444',
  },
  eyeBtn: {
    position: 'absolute',
    right: 14,
    height: 52,
    justifyContent: 'center',
  },
  strengthWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: -6,
  },
  strengthBarBg: {
    flex: 1,
    height: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  strengthBarFill: {
    height: '100%',
    borderRadius: 2,
  },
  strengthLabel: {
    fontSize: 12,
    fontWeight: '700',
    width: 40,
  },
  errorText: {
    fontSize: 12,
    color: '#EF4444',
    marginTop: -8,
  },
  resetBtn: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  resetBtnDisabled: {
    backgroundColor: '#CBD5E1',
  },
  resetBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
});
