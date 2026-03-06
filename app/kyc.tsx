import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useApp } from '@/app/context/AppContext';

export default function KYC() {
  const router = useRouter();
  const { theme } = useApp();
  return (
    <Background>
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>KYC</Text>
          <View style={{ width: 24 }} />
        </View>
      </View>

      <View style={[styles.cardFirstContain, { backgroundColor: theme.bg }]}>
        <View style={[styles.bottomCard, { backgroundColor: theme.card }]}>
          <View style={styles.content}>

            {/* Texte principal */}
            <Text style={styles.message}>
              Merci de procéder{'\n'}à la vérification{'\n'}d'identité
            </Text>

            {/* Barre de progression */}
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>

            {/* Icône check */}
            <View style={styles.checkCircle}>
              <Ionicons name="checkmark" size={32} color="#fff" />
            </View>

            {/* Label */}
            <Text style={styles.validLabel}>KYC valide</Text>

          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  topSection: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    gap: 24,
  },
  message: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1A1A2E',
    textAlign: 'center',
    lineHeight: 32,
  },
  progressBar: {
    width: '80%',
    height: 6,
    backgroundColor: '#E2E8F0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    width: '100%',
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 3,
  },
  checkCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#22C55E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  validLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#22C55E',
  },
});
