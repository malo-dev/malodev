import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '@/app/context/AppContext';

const ART1 = { uri: 'https://images.unsplash.com/photo-1522156373667-4c7234bbd804?w=400' };
const ART2 = { uri: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400' };
const ART3 = { uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400' };

const EVT1 = { uri: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600' };
const EVT2 = { uri: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600' };
const EVT3 = { uri: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600' };
const EVT4 = { uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600' };

const ART4 = { uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' };

const ARTISTS = [
  { image: ART1, name: 'Alxx Maée' },
  { image: ART2, name: 'Nöoe Bornie' },
  { image: ART3, name: 'DJ Karma' },
  { image: ART4, name: 'Lena Fox' },
];

const EVENTS = [
  { image: EVT1, title: 'Alos Ktaca', location: '@ Montréal' },
  { image: EVT2, title: 'Events Xxx', location: '@ Boufisarit' },
  { image: EVT3, title: 'Festival Sud', location: '@ Marseille' },
  { image: EVT4, title: 'Night Jazz', location: '@ Lyon' },
];

export default function Favorite() {
  const { theme, t } = useApp();
  return (
    <Background>
      {/* Header */}
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <View style={{ width: 32 }} />
          <Text style={styles.title}>{t('favorites')}</Text>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.cardFirstContain, { backgroundColor: theme.bg }]}>
        <View style={[styles.bottomCard, { backgroundColor: theme.card }]}>
          <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>

            {/* Artistes */}
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: theme.text }]}>Artistes</Text>
              <Ionicons name="chevron-forward" size={16} color={theme.text} />
            </View>
            <View style={styles.eventsGrid}>
              {ARTISTS.map((a, i) => (
                <TouchableOpacity key={i} style={styles.eventCard} activeOpacity={0.85}>
                  <Image source={a.image} style={styles.eventImage} resizeMode="cover" />
                  <Text style={styles.eventTitle} numberOfLines={1}>{a.name}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Events */}
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: theme.text }]}>Events</Text>
              <Ionicons name="chevron-forward" size={16} color={theme.text} />
            </View>
            <View style={styles.eventsGrid}>
              {EVENTS.map((e, i) => (
                <TouchableOpacity key={i} style={styles.eventCard} activeOpacity={0.85}>
                  <Image source={e.image} style={styles.eventImage} resizeMode="cover" />
                  <Text style={styles.eventTitle} numberOfLines={1}>{e.title}</Text>
                  <Text style={styles.eventLocation} numberOfLines={1}>{e.location}</Text>
                </TouchableOpacity>
              ))}
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  eventsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  eventCard: {
    width: '47%',
    gap: 4,
  },
  eventImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 14,
  },
  eventTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  eventLocation: {
    fontSize: 11,
    color: '#64748B',
  },
});
