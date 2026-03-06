import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { IceButton } from '@/app/components/Icebutton';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useApp } from '@/app/context/AppContext';

export default function IceCash() {
  const router = useRouter();
  const { theme } = useApp();

  return (
    <Background>
      {/* Header */}
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>IceCash</Text>
          <TouchableOpacity>
            <Ionicons name="receipt-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.cardFirstContain, { backgroundColor: theme.bg }]}>
        <View style={[styles.bottomCard, { backgroundColor: theme.card }]}>
          <ScrollView contentContainerStyle={{ padding: 20, gap: 16 }}>

            {/* Solde */}
            <View style={styles.balanceSection}>
              <Text style={styles.balanceLabel}>Mon Solde :</Text>
              <Text style={styles.balanceAmount}>50.00€</Text>
            </View>

            {/* Boutons Recharger / Payer */}
            <View style={styles.actionsRow}>
              <View style={{ flex: 1 }}>
                <IceButton
                  label="Recharger"
                  variant="white"
                  size="sm"
                  onPress={() => {}}
                />
              </View>
              <View style={{ flex: 1 }}>
                <IceButton
                  label="Payer"
                  variant="primary"
                  size="sm"
                  onPress={() => router.push('/kyc')}
                />
              </View>
            </View>

            {/* KYC */}
            <IceButton
              label="Vérifier mon identité (KYC)"
              variant="outline"
              size="sm"
              onPress={() => router.push('/kyc')}
            />

            {/* QR Code */}
            <Text style={styles.paymentLabel}>Payement</Text>
            <View style={styles.qrContainer}>
              <View style={styles.qrGrid}>
                {/* Coin haut-gauche */}
                <View style={[styles.qrCorner, { top: 0, left: 0 }]}>
                  <View style={styles.qrCornerInner} />
                </View>
                {/* Coin haut-droit */}
                <View style={[styles.qrCorner, { top: 0, right: 0 }]}>
                  <View style={styles.qrCornerInner} />
                </View>
                {/* Coin bas-gauche */}
                <View style={[styles.qrCorner, { bottom: 0, left: 0 }]}>
                  <View style={styles.qrCornerInner} />
                </View>
                {/* Pixels aléatoires centre */}
                {[
                  [40, 20], [60, 20], [80, 20], [50, 40], [70, 40], [90, 40],
                  [40, 60], [80, 60], [60, 80], [90, 80], [50, 100], [70, 100],
                  [40, 120], [60, 120], [90, 120], [50, 60], [80, 80],
                ].map(([x, y], i) => (
                  <View key={i} style={[styles.qrPixel, { left: x, top: y }]} />
                ))}
              </View>
            </View>

          </ScrollView>
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
  balanceSection: {
    gap: 4,
  },
  balanceLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748B',
  },
  balanceAmount: {
    fontSize: 42,
    fontWeight: '800',
    color: '#1A1A2E',
    letterSpacing: -1,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  paymentLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A2E',
    textAlign: 'center',
  },
  qrContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  qrGrid: {
    width: 160,
    height: 160,
    position: 'relative',
  },
  qrCorner: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderWidth: 4,
    borderColor: '#1A1A2E',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrCornerInner: {
    width: 16,
    height: 16,
    backgroundColor: '#1A1A2E',
    borderRadius: 2,
  },
  qrPixel: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: '#1A1A2E',
    borderRadius: 1,
  },
});
