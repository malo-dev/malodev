import React, { useRef, useState } from 'react';
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
import { useLocalSearchParams, useRouter } from 'expo-router';

const OTP_LENGTH = 6;

export default function OTP() {
  const router = useRouter();
  const params = useLocalSearchParams<{ email?: string; mode?: string }>();
  const email = params.email ?? '';
  const mode = params.mode ?? 'login';

  const [digits, setDigits] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const [resendTimer, setResendTimer] = useState(30);
  const inputs = useRef<Array<TextInput | null>>([]);

  const handleChange = (text: string, index: number) => {
    const digit = text.replace(/[^0-9]/g, '').slice(-1);
    const next = [...digits];
    next[index] = digit;
    setDigits(next);
    if (digit && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const isComplete = digits.every((d) => d !== '');

  const handleVerify = () => {
    if (!isComplete) return;
    if (mode === 'reset') {
      router.replace('/reset-password');
    } else {
      router.replace('/(tabs)');
    }
  };

  const handleResend = () => {
    setDigits(Array(OTP_LENGTH).fill(''));
    setResendTimer(30);
    inputs.current[0]?.focus();
    const interval = setInterval(() => {
      setResendTimer((t) => {
        if (t <= 1) { clearInterval(interval); return 0; }
        return t - 1;
      });
    }, 1000);
  };

  const maskedEmail = email.includes('@')
    ? email.replace(/(.{2})(.*)(@.*)/, (_, a, b, c) => a + b.replace(/./g, '*') + c)
    : email.slice(0, 3) + '****' + email.slice(-2);

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
              <Ionicons name="shield-checkmark-outline" size={32} color="#3B82F6" />
            </View>

            <Text style={styles.heading}>Vérification</Text>
            <Text style={styles.subheading}>
              Entrez le code à {OTP_LENGTH} chiffres envoyé à{'\n'}
              <Text style={styles.emailHighlight}>{maskedEmail}</Text>
            </Text>

            {/* OTP inputs */}
            <View style={styles.otpRow}>
              {digits.map((digit, index) => (
                <TextInput
                  key={index}
                  ref={(ref) => { inputs.current[index] = ref; }}
                  style={[styles.otpInput, digit ? styles.otpInputFilled : null]}
                  value={digit}
                  onChangeText={(text) => handleChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="number-pad"
                  maxLength={1}
                  selectTextOnFocus
                  caretHidden
                />
              ))}
            </View>

            {/* Verify */}
            <TouchableOpacity
              style={[styles.verifyBtn, !isComplete && styles.verifyBtnDisabled]}
              activeOpacity={0.85}
              onPress={handleVerify}>
              <Text style={styles.verifyBtnText}>Vérifier</Text>
            </TouchableOpacity>

            {/* Resend */}
            <View style={styles.resendRow}>
              <Text style={styles.resendText}>Vous n'avez pas reçu le code ? </Text>
              {resendTimer > 0 ? (
                <Text style={styles.resendTimer}>{resendTimer}s</Text>
              ) : (
                <TouchableOpacity onPress={handleResend}>
                  <Text style={styles.resendLink}>Renvoyer</Text>
                </TouchableOpacity>
              )}
            </View>

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
    gap: 18,
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
    fontSize: 24,
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
  emailHighlight: {
    fontWeight: '700',
    color: '#1A1A2E',
  },
  otpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginVertical: 4,
  },
  otpInput: {
    width: 48,
    height: 56,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A2E',
    backgroundColor: '#F8FAFC',
  },
  otpInputFilled: {
    borderColor: '#3B82F6',
    backgroundColor: '#EFF6FF',
  },
  verifyBtn: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifyBtnDisabled: {
    backgroundColor: '#CBD5E1',
  },
  verifyBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#fff',
  },
  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  resendText: {
    fontSize: 13,
    color: '#94A3B8',
  },
  resendTimer: {
    fontSize: 13,
    fontWeight: '700',
    color: '#94A3B8',
  },
  resendLink: {
    fontSize: 13,
    fontWeight: '700',
    color: '#3B82F6',
  },
});
