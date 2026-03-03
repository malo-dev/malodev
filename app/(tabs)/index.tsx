import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { EventCard } from '@/app/components/EventCard';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';

const IMG1 = {
  uri: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=60',
};
const IMG2 = {
  uri: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=60',
};
const MAP = {
  uri: 'https://images.unsplash.com/photo-1502920917128-1aa500764cec?auto=format&fit=crop&w=1200&q=60',
};

export default function HomeScreen() {
  const [mapOk, setMapOk] = useState(true);
  return (
    <Background>
      <View style={styles.topSection}>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.cardFirstContain}>
        <View style={styles.bottomCard}>
          <ScrollView contentContainerStyle={{ padding: 12, gap: 16 }}>
            {/* Search bar */}
            <View style={styles.searchBar}>
              <Ionicons name="search-outline" size={18} color="#64748B" />
              <TextInput
                placeholder="Rechercher"
                placeholderTextColor="#94A3B8"
                style={styles.searchInput}
              />
            </View>

            {/* Top Events selon nos goûts */}
            <Text style={styles.sectionTitle}>Top Events selon nos goûts</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.hRow}>
              <View style={{ width: 200 }}>
                <EventCard
                  image={IMG1}
                  title="Festival Aurora"
                  subtitle="Aapmonestr • 1 min"
                  price="27,9€"
                  badge="top-deal"
                  onPress={() => {}}
                  onBuy={() => {}}
                  variant="vertical"
                />
              </View>
              <View style={{ width: 200 }}>
                <EventCard
                  image={IMG2}
                  title="Soirée Electro"
                  subtitle="Near • 5 min"
                  price="19,0€"
                  badge="verified"
                  onPress={() => {}}
                  onBuy={() => {}}
                  variant="vertical"
                />
              </View>
            </ScrollView>

            {/* Événements proches de nous */}
            <Text style={styles.sectionTitle}>Événements proches de nous</Text>
            {mapOk ? (
              <Image
                source={MAP}
                style={styles.map}
                resizeMode="cover"
                onError={() => setMapOk(false)}
              />
            ) : (
              <View style={styles.mapFallback}>
                <Ionicons name="map-outline" size={20} color="#64748B" />
                <Text style={styles.mapText}>Carte indisponible</Text>
              </View>
            )}
            <EventCard
              image={IMG1}
              title="Festival XXX"
              subtitle="Recherches • 2 min"
              price="27,5€"
              badge={null}
              onPress={() => {}}
              onBuy={() => {}}
              variant="horizontal"
            />

            {/* Top Deals */}
            <Text style={styles.sectionTitle}>Top Deals</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.hRow}>
              <View style={{ width: 260 }}>
                <EventCard
                  image={IMG2}
                  title="Top tacos"
                  subtitle="Restauration - 5 min"
                  price="5,9€"
                  badge="top-deal"
                  onPress={() => {}}
                  onBuy={() => {}}
                  variant="horizontal"
                />
              </View>
              <View style={{ width: 260 }}>
                <EventCard
                  image={IMG1}
                  title="Happy Hour"
                  subtitle="Bar - 3 min"
                  price="2,0€"
                  badge="top-deal"
                  onPress={() => {}}
                  onBuy={() => {}}
                  variant="horizontal"
                />
              </View>
            </ScrollView>
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
  searchBar: {
    height: 42,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1A1A2E',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  hRow: {
    gap: 12,
    paddingVertical: 4,
  },
  map: {
    height: 120,
    borderRadius: 16,
    width: '100%',
  },
  mapFallback: {
    height: 120,
    borderRadius: 16,
    width: '100%',
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  mapText: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '600',
  },
});
