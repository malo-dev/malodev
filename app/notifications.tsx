import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useApp } from '@/app/context/AppContext';

const NOTIFS = [
  {
    id: '1',
    icon: 'ticket-outline',
    title: 'Votre billet est confirmé',
    body: 'Festival XXX · 29 mai 2023',
    time: 'Il y a 2h',
    unread: true,
  },
  {
    id: '2',
    icon: 'pricetag-outline',
    title: 'Nouvelle offre disponible',
    body: 'Profitez de -20% sur les billets Rock Festival',
    time: 'Il y a 5h',
    unread: true,
  },
  {
    id: '3',
    icon: 'wallet-outline',
    title: 'Rechargement réussi',
    body: '+100.00€ ajoutés à votre IceCash',
    time: 'Hier',
    unread: false,
  },
  {
    id: '4',
    icon: 'shield-checkmark-outline',
    title: 'KYC validé',
    body: 'Votre identité a été vérifiée avec succès',
    time: 'Il y a 3 jours',
    unread: false,
  },
  {
    id: '5',
    icon: 'star-outline',
    title: 'Nouvel événement près de vous',
    body: 'Jazz Night à 2km de chez vous',
    time: 'Il y a 5 jours',
    unread: false,
  },
];

export default function Notifications() {
  const router = useRouter();
  const { theme, t } = useApp();
  const [notifs, setNotifs] = useState(NOTIFS);
  const [pushEnabled, setPushEnabled] = useState(true);

  const markAllRead = () => setNotifs((prev) => prev.map((n) => ({ ...n, unread: false })));
  const unreadCount = notifs.filter((n) => n.unread).length;

  return (
    <Background>
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>{t('notifications')}</Text>
          {unreadCount > 0 ? (
            <TouchableOpacity onPress={markAllRead}>
              <Text style={styles.markRead}>Tout lire</Text>
            </TouchableOpacity>
          ) : (
            <View style={{ width: 60 }} />
          )}
        </View>
      </View>

      <View style={[styles.cardFirstContain, { backgroundColor: theme.bg }]}>
        <View style={[styles.bottomCard, { backgroundColor: theme.card }]}>
          <ScrollView contentContainerStyle={{ padding: 16, gap: 0 }}>

            {/* Push toggle */}
            <View style={styles.pushRow}>
              <View style={styles.menuIcon}>
                <Ionicons name="notifications-outline" size={20} color="#3B82F6" />
              </View>
              <Text style={styles.pushLabel}>Notifications push</Text>
              <Switch
                value={pushEnabled}
                onValueChange={setPushEnabled}
                trackColor={{ false: '#E2E8F0', true: '#3B82F6' }}
                thumbColor="#fff"
              />
            </View>

            <View style={styles.divider} />

            {/* Notif list */}
            {notifs.map((item, index) => (
              <React.Fragment key={item.id}>
                <TouchableOpacity
                  style={[styles.notifItem, item.unread && styles.notifItemUnread]}
                  onPress={() => setNotifs((prev) => prev.map((n) => n.id === item.id ? { ...n, unread: false } : n))}>
                  <View style={[styles.notifIcon, item.unread && styles.notifIconUnread]}>
                    <Ionicons name={item.icon as any} size={20} color={item.unread ? '#3B82F6' : '#94A3B8'} />
                  </View>
                  <View style={styles.notifContent}>
                    <View style={styles.notifHeader}>
                      <Text style={[styles.notifTitle, item.unread && styles.notifTitleUnread]}>
                        {item.title}
                      </Text>
                      {item.unread && <View style={styles.unreadDot} />}
                    </View>
                    <Text style={styles.notifBody}>{item.body}</Text>
                    <Text style={styles.notifTime}>{item.time}</Text>
                  </View>
                </TouchableOpacity>
                {index < notifs.length - 1 && <View style={styles.divider} />}
              </React.Fragment>
            ))}

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
  markRead: {
    fontSize: 13,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.8)',
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
  pushRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 14,
  },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pushLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A2E',
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
  },
  notifItem: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 14,
  },
  notifItemUnread: {
    backgroundColor: '#F8FAFF',
  },
  notifIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notifIconUnread: {
    backgroundColor: '#EFF6FF',
  },
  notifContent: {
    flex: 1,
    gap: 3,
  },
  notifHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  notifTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#64748B',
    flex: 1,
  },
  notifTitleUnread: {
    color: '#1A1A2E',
    fontWeight: '700',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3B82F6',
  },
  notifBody: {
    fontSize: 12,
    color: '#64748B',
    lineHeight: 17,
  },
  notifTime: {
    fontSize: 11,
    color: '#94A3B8',
  },
});
