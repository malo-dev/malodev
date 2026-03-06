import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { useApp } from '@/app/context/AppContext';

const IMG1 = { uri: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600' };
const IMG2 = { uri: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600' };
const IMG3 = { uri: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600' };
const IMG4 = { uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600' };

const CATEGORIES = ['Tous', 'Concerts', 'Festivals', 'Sport', 'Resto', 'Art'];

const RESULTS = [
  { image: IMG1, title: 'Festival Aurora', location: '@ Paris', price: '27,9€' },
  { image: IMG2, title: 'Soirée Electro', location: '@ Lyon', price: '19,0€' },
  { image: IMG3, title: 'Jazz Night', location: '@ Bordeaux', price: '14,5€' },
  { image: IMG4, title: 'Open Mic', location: '@ Marseille', price: 'Gratuit' },
];

export default function Search() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const { theme, t } = useApp();

  return (
    <Background>
      {/* Header */}
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <View style={{ width: 32 }} />
          <Text style={styles.title}>{t('search')}</Text>
          <TouchableOpacity>
            <Ionicons name="options-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.cardFirstContain, { backgroundColor: theme.bg }]}>
        <View style={[styles.bottomCard, { backgroundColor: theme.card }]}>
          <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>

            {/* Barre de recherche */}
            <View style={[styles.searchBar, { backgroundColor: theme.input, borderColor: theme.border }]}>
              <Ionicons name="search-outline" size={18} color={theme.subtext} />
              <TextInput
                placeholder="Rechercher un événement..."
                placeholderTextColor={theme.placeholder}
                style={[styles.searchInput, { color: theme.text }]}
              />
            </View>

            {/* Filtres catégories */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
              {CATEGORIES.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  style={[styles.chip, { backgroundColor: theme.cardSecondary, borderColor: theme.border }, activeCategory === cat && styles.chipActive]}
                  onPress={() => setActiveCategory(cat)}>
                  <Text style={[styles.chipText, { color: theme.subtext }, activeCategory === cat && styles.chipTextActive]}>
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Résultats */}
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: theme.text }]}>Résultats</Text>
              <Text style={[styles.resultCount, { color: theme.subtext }]}>{RESULTS.length} trouvés</Text>
            </View>

            <View style={styles.grid}>
              {RESULTS.map((item, i) => (
                <TouchableOpacity key={i} style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]} activeOpacity={0.85}>
                  <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
                  <View style={styles.cardInfo}>
                    <Text style={[styles.cardTitle, { color: theme.text }]} numberOfLines={1}>{item.title}</Text>
                    <Text style={[styles.cardLocation, { color: theme.subtext }]} numberOfLines={1}>{item.location}</Text>
                    <Text style={styles.cardPrice}>{item.price}</Text>
                  </View>
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
  searchBar: {
    height: 44,
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
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    backgroundColor: '#F8FAFC',
  },
  chipActive: {
    backgroundColor: '#1A1A2E',
    borderColor: '#1A1A2E',
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
  },
  chipTextActive: {
    color: '#FFFFFF',
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
  resultCount: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    width: '47%',
    gap: 6,
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 14,
  },
  cardInfo: {
    gap: 2,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  cardLocation: {
    fontSize: 11,
    color: '#64748B',
  },
  cardPrice: {
    fontSize: 13,
    fontWeight: '700',
    color: '#00F0FF',
  },
});
