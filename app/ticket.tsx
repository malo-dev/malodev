import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { IceButton } from '@/app/components/Icebutton';

export default function Ticket() {
  return (
    <Background>
      <View style={styles.topSection}>
        <Text style={styles.title}>Mes Billets</Text>
      </View>
      <View style={styles.cardFirstContain}>
        <View style={styles.bottomCard}>
          <View style={{ padding: 16, gap: 12 }}>
            <Text style={styles.cardTitle}>Festival XXX</Text>
            <Text style={styles.meta}>2025-09-23 • 21:00</Text>
            <Text style={styles.meta}>Famille 2 • Rang A</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.price}>20,00€</Text>
              <IceButton label="Acheter" variant="ice" size="sm" onPress={() => {}} />
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  meta: {
    fontSize: 12,
    color: '#64748B',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A2E',
  },
});
