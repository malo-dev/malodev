import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { IceButton } from '@/app/components/Icebutton';
import { useRouter } from 'expo-router';

export default function KYC() {
  const router = useRouter();
  return (
    <Background>
      <View style={styles.topSection}>
        <Text style={styles.title}>KYC</Text>
      </View>
      <View style={styles.cardFirstContain}>
        <View style={styles.bottomCard}>
          <View style={{ padding: 16, gap: 12 }}>
            <Text style={styles.message}>Merci de procéder à la vérification d&#39;identité</Text>
            <IceButton
              label="KYC valide"
              variant="ice"
              size="md"
              onPress={() => router.replace('/(tabs)')}
            />
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
  },
  title: {
    fontSize: 34,
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
    elevation: 12,
  },
  message: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A2E',
    textAlign: 'center',
  },
});
