import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { EventCard } from '@/app/components/EventCard';
import { Background } from '@/app/components/Background';

const A = { uri: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800' };
const B = { uri: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800' };

export default function Market() {
  return (
    <Background>
      <View style={styles.topSection}>
        <Text style={styles.title}>Market</Text>
      </View>
      <View style={styles.cardFirstContain}>
        <View style={styles.bottomCard}>
          <ScrollView contentContainerStyle={{ padding: 12, gap: 12 }}>
            <EventCard
              image={A}
              title="Pass Concert"
              subtitle="Week-end"
              price="49,9€"
              badge="top-deal"
              onPress={() => {}}
              onBuy={() => {}}
              variant="vertical"
            />
            <EventCard
              image={B}
              title="VIP Lounge"
              subtitle="Samedi soir"
              price="129,0€"
              badge="verified"
              onPress={() => {}}
              onBuy={() => {}}
              variant="vertical"
            />
          </ScrollView>
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
});
