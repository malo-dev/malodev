import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useApp } from '@/app/context/AppContext';

const HISTORY = [
  {
    id: '1',
    icon: 'ticket-outline',
    title: 'Festival XXX',
    subtitle: 'Billet Famille · 2 pers.',
    amount: '-50.00€',
    date: '29 mai 2023',
    status: 'confirmed',
  },
  {
    id: '2',
    icon: 'wallet-outline',
    title: 'Rechargement IceCash',
    subtitle: 'Via carte bancaire',
    amount: '+100.00€',
    date: '15 mai 2023',
    status: 'confirmed',
  },
  {
    id: '3',
    icon: 'ticket-outline',
    title: 'Concert Jazz Night',
    subtitle: 'Billet Standard · 1 pers.',
    amount: '-25.00€',
    date: '3 avril 2023',
    status: 'confirmed',
  },
  {
    id: '4',
    icon: 'close-circle-outline',
    title: 'Rock Festival',
    subtitle: 'Billet VIP · Annulé',
    amount: '+75.00€',
    date: '20 mars 2023',
    status: 'cancelled',
  },
  {
    id: '5',
    icon: 'wallet-outline',
    title: 'Rechargement IceCash',
    subtitle: 'Via carte bancaire',
    amount: '+50.00€',
    date: '1 mars 2023',
    status: 'confirmed',
  },
];

type Filter = 'Tout' | 'Achats' | 'Recharges';

export default function History() {
  const router = useRouter();
  const { theme, t } = useApp();
  const [filter, setFilter] = useState<Filter>('Tout');

  const filtered = HISTORY.filter((item) => {
    if (filter === 'Achats') return item.icon === 'ticket-outline';
    if (filter === 'Recharges') return item.icon === 'wallet-outline';
    return true;
  });

  return (
    <Background>
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>{t('history')}</Text>
          <View style={{ width: 24 }} />
        </View>
      </View>

      <View style={[styles.cardFirstContain, { backgroundColor: theme.bg }]}>
        <View style={[styles.bottomCard, { backgroundColor: theme.card }]}>
          <ScrollView contentContainerStyle={{ padding: 16, gap: 12 }}>

            {/* Filter chips */}
            <View style={styles.filters}>
              {(['Tout', 'Achats', 'Recharges'] as Filter[]).map((f) => (
                <TouchableOpacity
                  key={f}
                  style={[styles.chip, filter === f && styles.chipActive]}
                  onPress={() => setFilter(f)}>
                  <Text style={[styles.chipText, filter === f && styles.chipTextActive]}>{f}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Transactions */}
            {filtered.map((item, index) => (
              <React.Fragment key={item.id}>
                <View style={styles.transactionItem}>
                  <View style={[styles.transactionIcon, item.status === 'cancelled' && styles.transactionIconCancelled]}>
                    <Ionicons
                      name={item.icon as any}
                      size={20}
                      color={item.status === 'cancelled' ? '#EF4444' : '#3B82F6'}
                    />
                  </View>
                  <View style={styles.transactionInfo}>
                    <Text style={styles.transactionTitle}>{item.title}</Text>
                    <Text style={styles.transactionSub}>{item.subtitle}</Text>
                    <Text style={styles.transactionDate}>{item.date}</Text>
                  </View>
                  <Text style={[
                    styles.transactionAmount,
                    item.amount.startsWith('+') ? styles.amountPositive : styles.amountNegative,
                  ]}>
                    {item.amount}
                  </Text>
                </View>
                {index < filtered.length - 1 && <View style={styles.divider} />}
              </React.Fragment>
            ))}

            {filtered.length === 0 && (
              <View style={styles.empty}>
                <Ionicons name="time-outline" size={48} color="#CBD5E1" />
                <Text style={styles.emptyText}>Aucune transaction</Text>
              </View>
            )}

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
  filters: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 4,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F1F5F9',
  },
  chipActive: {
    backgroundColor: '#1A1A2E',
  },
  chipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
  },
  chipTextActive: {
    color: '#fff',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 4,
  },
  transactionIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionIconCancelled: {
    backgroundColor: '#FEF2F2',
  },
  transactionInfo: {
    flex: 1,
    gap: 2,
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1A1A2E',
  },
  transactionSub: {
    fontSize: 12,
    color: '#64748B',
  },
  transactionDate: {
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 2,
  },
  transactionAmount: {
    fontSize: 15,
    fontWeight: '700',
  },
  amountPositive: {
    color: '#22C55E',
  },
  amountNegative: {
    color: '#1A1A2E',
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
  },
  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    gap: 12,
  },
  emptyText: {
    fontSize: 14,
    color: '#94A3B8',
    fontWeight: '500',
  },
});
