import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IceButton } from '@/app/components/Icebutton';
import { Background } from '@/app/components/Background';

export default function Profile() {
  return (
    <Background>
      <View style={styles.topSection}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.cardFirstContain}>
        <View style={styles.bottomCard}>
          <View style={{ padding: 16, gap: 12 }}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.meta}>john.doe@email.com</Text>
            <IceButton label="Modifier le profil" variant="white" size="md" onPress={() => {}} />
            <IceButton label="Se déconnecter" variant="danger" size="md" onPress={() => {}} />
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
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
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
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  meta: {
    fontSize: 12,
    color: '#64748B',
  },
});
