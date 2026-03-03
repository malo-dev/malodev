import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Background } from '@/app/components/Background';
import { EventCard } from '@/app/components/EventCard';

const ART = { uri: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?w=800' };
const IMG = { uri: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800' };

export default function Favorite() {
  return (
    <Background>
      <View style={styles.topSection}>
        <Text style={styles.title}>Favoris</Text>
      </View>
      <View style={styles.cardFirstContain}>
        <View style={styles.bottomCard}>
          <ScrollView contentContainerStyle={{ padding: 12, gap: 12 }}>
            <View style={{ gap: 8 }}>
              <Text style={styles.sectionTitle}>Artistes</Text>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Image source={ART} style={{ width: 70, height: 70, borderRadius: 12 }} />
                <Image source={ART} style={{ width: 70, height: 70, borderRadius: 12 }} />
                <Image source={ART} style={{ width: 70, height: 70, borderRadius: 12 }} />
              </View>
            </View>
            <Text style={styles.sectionTitle}>Events</Text>
            <EventCard
              image={IMG}
              title="Festival XXX"
              subtitle="Cette semaine"
              price="18,0€"
              badge="top-deal"
              onPress={() => {}}
              onBuy={() => {}}
              variant="horizontal"
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
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A2E',
  },
});
