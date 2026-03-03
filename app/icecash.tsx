import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { IceButton } from '@/app/components/Icebutton';
import { useRouter } from 'expo-router';

export default function IceCash() {
  const router = useRouter();
  return (
    <Background>
      <View style={styles.topSection}>
        <Text style={styles.title}>IceCash</Text>
      </View>
      <View style={styles.cardFirstContain}>
        <View style={styles.bottomCard}>
          <View style={{ padding: 16, gap: 12 }}>
            <Text style={styles.balance}>Mon Solde : 50.00€</Text>
            <IceButton label="Recharger" variant="white" size="md" onPress={() => {}} />
            <IceButton label="Payer" variant="ice" size="md" onPress={() => {}} />
            <IceButton
              label="Vérifier mon identité (KYC)"
              variant="outline"
              size="sm"
              onPress={() => router.push('/kyc')}
            />
            <View style={styles.qrBox}>
              <Text style={styles.qrText}>QR</Text>
            </View>
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
  balance: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  qrBox: {
    height: 160,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1A1A2E',
  },
});
