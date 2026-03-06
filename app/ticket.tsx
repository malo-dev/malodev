import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useApp } from '@/app/context/AppContext';
import { IceButton } from '@/app/components/Icebutton';
import { Background } from '@/app/components/Background';

const IMG = { uri: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600' };

export default function Ticket() {
  const router = useRouter();
  const { theme } = useApp();
  const [selectedFamily, setSelectedFamily] = useState('Famille 2');

  return (
    <Background>
      {/* Header */}
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>Billet</Text>
          <View style={{ width: 24 }} />
        </View>
      </View>

      <View style={[styles.cardFirstContain, { backgroundColor: theme.bg }]}>
        <View style={[styles.bottomCard, { backgroundColor: theme.card }]}>
          <ScrollView contentContainerStyle={{ padding: 16, gap: 16 }}>

            <Text style={[styles.sectionTitle, { color: theme.text }]}>Mes Billets</Text>

            {/* Ticket card avec gradient bleu */}
            <LinearGradient
              colors={['#1E3A8A', '#3B82F6', '#60A5FA']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.ticketCard}>
              <View style={styles.ticketLeft}>
                <Text style={styles.ticketLabel}>Réflection</Text>
                <Text style={styles.ticketTitle}>Festival XXX</Text>
                <View style={styles.ticketRow}>
                  <Ionicons name="people-outline" size={14} color="rgba(255,255,255,0.8)" />
                  <Text style={styles.ticketSub}>Famille</Text>
                </View>
              </View>
              {/* Séparateur pointillé */}
              <View style={styles.separator} />
              {/* Barcode */}
              <View style={styles.ticketRight}>
                <View style={styles.barcode}>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <View
                      key={i}
                      style={[styles.barLine, { width: i % 3 === 0 ? 3 : 2, opacity: i % 2 === 0 ? 1 : 0.5 }]}
                    />
                  ))}
                </View>
              </View>
            </LinearGradient>

            {/* Détails événement */}
            <View style={styles.detailsCard}>
              <View style={styles.detailHeader}>
                <View style={styles.detailInfo}>
                  <Text style={styles.detailTitle}>Festival XXX</Text>
                  <Text style={styles.detailSub}>Famille</Text>
                </View>
                <TouchableOpacity>
                  <Ionicons name="information-circle-outline" size={22} color="#64748B" />
                </TouchableOpacity>
              </View>

              <View style={styles.divider} />

              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Personne</Text>
                <Text style={styles.detailValue}>2023-05-29</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>Prix</Text>
                <Text style={styles.detailValue}>50.00€</Text>
              </View>

              <View style={styles.divider} />

              {/* Tallercanner */}
              <Text style={styles.scanLabel}>Tallercanner de billets</Text>
              <TouchableOpacity style={styles.dropdown}>
                <Ionicons name="calendar-outline" size={16} color="#64748B" />
                <Text style={styles.dropdownText}>{selectedFamily}</Text>
                <Ionicons name="chevron-down" size={16} color="#64748B" />
              </TouchableOpacity>

              {/* Apmations */}
              <TouchableOpacity style={styles.dropdown}>
                <Ionicons name="person-outline" size={16} color="#64748B" />
                <Text style={styles.dropdownText}>Apmations</Text>
                <Ionicons name="chevron-down" size={16} color="#64748B" />
              </TouchableOpacity>
            </View>

          </ScrollView>

          {/* Bottom bar */}
          <View style={styles.bottomBar}>
            <Text style={styles.bottomPrice}>20,00 €</Text>
            <IceButton
              label="Acheter"
              variant="primary"
              size="sm"
              fullWidth={false}
              onPress={() => router.push('/icecash')}
            />
          </View>
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
    overflow: 'hidden',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1A1A2E',
  },
  ticketCard: {
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 120,
  },
  ticketLeft: {
    flex: 1,
    gap: 6,
  },
  ticketLabel: {
    fontSize: 11,
    color: 'rgba(255,255,255,0.7)',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  ticketTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff',
  },
  ticketRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ticketSub: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
  },
  separator: {
    width: 1,
    height: '80%',
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 16,
    borderStyle: 'dashed',
  },
  ticketRight: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  barcode: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    height: 70,
  },
  barLine: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 1,
  },
  detailsCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 16,
    gap: 12,
  },
  detailHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailInfo: {
    gap: 2,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  detailSub: {
    fontSize: 12,
    color: '#64748B',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 13,
    color: '#64748B',
  },
  detailValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1A1A2E',
  },
  scanLabel: {
    fontSize: 12,
    color: '#64748B',
    fontWeight: '500',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  dropdownText: {
    flex: 1,
    fontSize: 13,
    color: '#1A1A2E',
    fontWeight: '500',
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    backgroundColor: '#fff',
  },
  bottomPrice: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A1A2E',
  },
});
