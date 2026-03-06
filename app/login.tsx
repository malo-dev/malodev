import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Background>
      {/* Top brand */}
      <View style={styles.topSection}>
        <Text style={styles.brand}>ICEPASS</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.cardFirstContain}>
        <View style={styles.bottomCard}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>

            {/* Email/Tel */}
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email/Tel"
                placeholderTextColor="#94A3B8"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password */}
            <View style={styles.inputBox}>
              <TextInput
                style={[styles.input, { paddingRight: 48 }]}
                value={password}
                onChangeText={setPassword}
                placeholder="Mot de passe"
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

            {/* Mot de passe oublié */}
            <TouchableOpacity
              style={styles.forgotRow}
              onPress={() => router.push('/forgot-password')}>
              <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
            </TouchableOpacity>

            {/* Connexion */}
            <TouchableOpacity
              style={styles.loginBtn}
              activeOpacity={0.85}
              onPress={() => router.replace('/(tabs)')}>
              <Text style={styles.loginBtnText}>Se connecter</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View style={styles.dividerRow}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>ou continuer avec</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* Google */}
            <TouchableOpacity style={styles.socialBtn} activeOpacity={0.85} onPress={() => {}}>
              <View style={styles.socialIconWrap}>
                <Text style={styles.gIcon}>G</Text>
              </View>
              <Text style={styles.socialBtnText}>Google</Text>
              <View style={{ width: 32 }} />
            </TouchableOpacity>

            {/* Facebook */}
            <TouchableOpacity style={[styles.socialBtn, styles.fbBtn]} activeOpacity={0.85} onPress={() => {}}>
              <View style={styles.socialIconWrap}>
                <Text style={styles.fbIcon}>f</Text>
              </View>
              <Text style={[styles.socialBtnText, styles.socialBtnTextWhite]}>Facebook</Text>
              <View style={{ width: 32 }} />
            </TouchableOpacity>

            {/* Apple */}
            <TouchableOpacity style={[styles.socialBtn, styles.appleBtn]} activeOpacity={0.85} onPress={() => {}}>
              <View style={styles.socialIconWrap}>
                <Text style={styles.appleIcon}></Text>
              </View>
              <Text style={[styles.socialBtnText, styles.socialBtnTextWhite]}>Apple</Text>
              <View style={{ width: 32 }} />
            </TouchableOpacity>

            {/* FranceConnect */}
            <TouchableOpacity style={[styles.socialBtn, styles.fcBtn]} activeOpacity={0.85} onPress={() => {}}>
              <View style={styles.fcIconWrap}>
                <Text style={styles.fcIconText}>RF</Text>
              </View>
              <Text style={[styles.socialBtnText, styles.socialBtnTextWhite]}>FranceConnect</Text>
              <View style={{ width: 32 }} />
            </TouchableOpacity>

            {/* Inscription */}
            <TouchableOpacity
              style={styles.signupRow}
              onPress={() => router.push('/signup')}>
              <Text style={styles.signupLink}>Inscription</Text>
            </TouchableOpacity>

          </ScrollView>
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
  scrollContent: {
    padding: 24,
    gap: 12,
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
  eyeBtn: {
    position: 'absolute',
    right: 14,
    height: 52,
    justifyContent: 'center',
  },
  forgotRow: {
    alignItems: 'flex-end',
    marginTop: -4,
  },
  forgotText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#3B82F6',
  },
  loginBtn: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  loginBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.3,
  },
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 4,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  dividerText: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '500',
  },
  socialBtn: {
    height: 52,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  socialIconWrap: {
    width: 32,
    alignItems: 'flex-start',
  },
  socialBtnText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A2E',
    textAlign: 'center',
  },
  socialBtnTextWhite: {
    color: '#fff',
  },
  gIcon: {
    fontSize: 18,
    fontWeight: '800',
    color: '#EA4335',
  },
  fbBtn: {
    backgroundColor: '#1877F2',
    borderColor: '#1877F2',
  },
  fbIcon: {
    fontSize: 20,
    fontWeight: '900',
    color: '#fff',
    lineHeight: 22,
  },
  appleBtn: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  appleIcon: {
    fontSize: 18,
    color: '#fff',
    lineHeight: 22,
  },
  fcBtn: {
    backgroundColor: '#003189',
    borderColor: '#003189',
  },
  fcIconWrap: {
    width: 32,
    height: 24,
    backgroundColor: '#fff',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fcIconText: {
    fontSize: 9,
    fontWeight: '900',
    color: '#003189',
    letterSpacing: 0.5,
  },
  signupRow: {
    alignItems: 'center',
    paddingVertical: 6,
    marginTop: 4,
  },
  signupLink: {
    fontSize: 14,
    fontWeight: '700',
    color: '#3B82F6',
  },
});
