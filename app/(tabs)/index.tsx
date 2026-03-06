import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { EventCard } from '@/app/components/EventCard';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '@/app/context/AppContext';

const IMG1 = {
  uri: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=60',
};
const IMG2 = {
  uri: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&w=1000&q=60',
};
import MAP from '@/assets/GoogleMapTA.webp';

export default function HomeScreen() {
  const [mapOk, setMapOk] = useState(true);
  const { theme, t } = useApp();
  return (
    <Background>
      <View style={styles.topSection}>
        <Text style={styles.title}>{t('home')}</Text>
      </View>
      <View style={[styles.cardFirstContain, { backgroundColor: theme.bg }]}>
        <View style={[styles.bottomCard, { backgroundColor: theme.card }]}>
          <ScrollView contentContainerStyle={{ padding: 12, gap: 16 }}>
            {/* Search bar */}
            <View style={[styles.searchBar, { backgroundColor: theme.input, borderColor: theme.border }]}>
              <Ionicons name="search-outline" size={18} color={theme.subtext} />
              <TextInput
                placeholder="Rechercher"
                placeholderTextColor={theme.placeholder}
                style={[styles.searchInput, { color: theme.text }]}
              />
            </View>

            {/* Top Events selon nos goûts */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Top Events selon nos goûts</Text>
              <Ionicons name="chevron-forward" size={16} color="#1A1A2E" />
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.hRow}>
              <View style={{ width: 220 }}>
                <EventCard
                  image={IMG1}
                  title="Festival Aurora"
                  subtitle="Aapmonestr • 1 min"
                  badge="top-deal"
                  onPress={() => {}}
                  variant="overlay"
                />
              </View>
              <View style={{ width: 220 }}>
                <EventCard
                  image={IMG2}
                  title="Soirée Electro"
                  subtitle="Near • 5 min"
                  badge="verified"
                  onPress={() => {}}
                  variant="overlay"
                />
              </View>
              <View style={{ width: 220 }}>
                <EventCard
                  image={IMG1}
                  title="Concert Jazz"
                  subtitle="Centre ville • 8 min"
                  onPress={() => {}}
                  variant="overlay"
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
            {[
              { title: 'Festival XXX', subtitle: 'Recherches • 21min', price: '27,9€' },
              { title: 'Top toecne', subtitle: 'Recherches données • 388h', price: '57,9€' },
            ].map((item, i) => (
              <View key={i} style={styles.nearRow}>
                <View style={styles.nearIcon}>
                  <Ionicons name="location-outline" size={16} color="#64748B" />
                </View>
                <View style={styles.nearInfo}>
                  <Text style={styles.nearTitle}>{item.title}</Text>
                  <Text style={styles.nearSubtitle}>{item.subtitle}</Text>
                </View>
                <Text style={styles.nearPrice}>{item.price}</Text>
              </View>
            ))}

            {/* Top Deals */}
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Top Deals</Text>
              <Ionicons name="chevron-forward" size={16} color="#1A1A2E" />
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.hRow}>
              <View style={{ width: 160 }}>
                <EventCard
                  image={IMG2}
                  title="Top tacos"
                  badge="countdown"
                  countdown="01:12"
                  onPress={() => {}}
                  variant="overlay"
                />
              </View>
              <View style={{ width: 160 }}>
                <EventCard
                  image={IMG1}
                  title="Happy Hour"
                  badge="countdown"
                  countdown="01:20"
                  onPress={() => {}}
                  variant="overlay"
                />
              </View>
              <View style={{ width: 160 }}>
                <EventCard
                  image={IMG2}
                  title="Top E"
                  badge="countdown"
                  countdown="00:45"
                  onPress={() => {}}
                  variant="overlay"
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  nearRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 6,
  },
  nearIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nearInfo: {
    flex: 1,
  },
  nearTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1A1A2E',
  },
  nearSubtitle: {
    fontSize: 11,
    color: '#64748B',
    marginTop: 1,
  },
  nearPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#00F0FF',
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
