import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { IceButton } from '@/app/components/Icebutton';
import { useApp } from '@/app/context/AppContext';
import { useRouter } from 'expo-router';

const IMG1 = { uri: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600' };
const IMG2 = { uri: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600' };
const IMG3 = { uri: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600' };
const IMG4 = { uri: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600' };

const LISTINGS = [
  { image: IMG1, title: 'Festival XXX', location: '@ Romains • 3ami', price: '19,00 €' },
  { image: IMG2, title: 'Festival XXX', location: '@ Romains • 3ami', price: '19,00 €' },
  { image: IMG3, title: 'Concert Jazz', location: '@ Paris • 1ami', price: '27,50 €' },
  { image: IMG4, title: 'Soirée Electro', location: '@ Lyon • 5ami', price: '15,00 €' },
];

export default function Market() {
  const router = useRouter();
  const { theme, t } = useApp();
  return (
    <Background>
      {/* Header */}
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <View style={{ width: 32 }} />
          <Text style={styles.title}>{t('market')}</Text>
          <TouchableOpacity>
            <Ionicons name="receipt-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.cardFirstContain, { backgroundColor: theme.bg }]}>
        <View style={[styles.bottomCard, { backgroundColor: theme.card }]}>
          <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>

            <Text style={[styles.subtitle, { color: theme.subtext }]}>Marketplace entre particuliers</Text>

            <View style={styles.grid}>
              {LISTINGS.map((item, i) => (
                <View key={i} style={[styles.card, { backgroundColor: theme.card, borderColor: theme.border }]}>
                  <TouchableOpacity activeOpacity={0.85}>
                    <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
                  </TouchableOpacity>
                  <Text style={[styles.cardTitle, { color: theme.text }]} numberOfLines={1}>{item.title}</Text>
                  <View style={styles.locationRow}>
                    <Ionicons name="location-outline" size={11} color={theme.subtext} />
                    <Text style={[styles.cardLocation, { color: theme.subtext }]} numberOfLines={1}>{item.location}</Text>
                  </View>
                  <View style={styles.priceRow}>
                    <Text style={styles.cardPrice}>{item.price}</Text>
                    <IceButton
                      tKey="event.buy"
                      label="Acheter"
                      variant="primary"
                      size="xs"
                      fullWidth={false}
                      onPress={() => router.push('/ticket')}
                    />
                  </View>
                </View>
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
  subtitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1A1A2E',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },
  card: {
    width: '47%',
    gap: 5,
  },
  cardImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 14,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  cardLocation: {
    fontSize: 11,
    color: '#64748B',
    flex: 1,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1A1A2E',
  },
});
