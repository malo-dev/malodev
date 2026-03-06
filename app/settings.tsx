import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useApp } from '@/app/context/AppContext';

export default function Settings() {
  const router = useRouter();
  const { theme, t } = useApp();
  const [notifications, setNotifications] = useState(true);
  const [biometric, setBiometric] = useState(false);
  const [newsletter, setNewsletter] = useState(true);

  const sections = [
    {
      title: 'Compte',
      items: [
        { icon: 'person-outline', label: 'Modifier le profil', onPress: () => {} },
        { icon: 'lock-closed-outline', label: 'Changer le mot de passe', onPress: () => {} },
        { icon: 'shield-checkmark-outline', label: 'Sécurité', onPress: () => {} },
      ],
    },
    {
      title: 'Préférences',
      items: [
        { icon: 'card-outline', label: 'Moyens de paiement', onPress: () => {} },
        { icon: 'location-outline', label: 'Localisation', onPress: () => {} },
      ],
    },
    {
      title: 'Danger',
      items: [
        { icon: 'trash-outline', label: 'Supprimer le compte', onPress: () => {}, danger: true },
      ],
    },
  ];

  return (
    <Background>
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>{t('settings')}</Text>
          <View style={{ width: 24 }} />
        </View>
      </View>

      <View style={[styles.cardFirstContain, { backgroundColor: theme.bg }]}>
        <View style={[styles.bottomCard, { backgroundColor: theme.card }]}>
          <ScrollView contentContainerStyle={{ padding: 16, gap: 20 }}>

            {/* Toggle items */}
            <View style={styles.group}>
              <Text style={styles.groupTitle}>Notifications</Text>
              <View style={styles.toggleItem}>
                <View style={styles.menuIcon}>
                  <Ionicons name="notifications-outline" size={20} color="#3B82F6" />
                </View>
                <Text style={styles.menuLabel}>Activer les notifications</Text>
                <Switch
                  value={notifications}
                  onValueChange={setNotifications}
                  trackColor={{ false: '#E2E8F0', true: '#3B82F6' }}
                  thumbColor="#fff"
                />
              </View>
              <View style={styles.toggleItem}>
                <View style={styles.menuIcon}>
                  <Ionicons name="mail-outline" size={20} color="#3B82F6" />
                </View>
                <Text style={styles.menuLabel}>Newsletter</Text>
                <Switch
                  value={newsletter}
                  onValueChange={setNewsletter}
                  trackColor={{ false: '#E2E8F0', true: '#3B82F6' }}
                  thumbColor="#fff"
                />
              </View>
              <View style={styles.toggleItem}>
                <View style={styles.menuIcon}>
                  <Ionicons name="finger-print-outline" size={20} color="#3B82F6" />
                </View>
                <Text style={styles.menuLabel}>Connexion biométrique</Text>
                <Switch
                  value={biometric}
                  onValueChange={setBiometric}
                  trackColor={{ false: '#E2E8F0', true: '#3B82F6' }}
                  thumbColor="#fff"
                />
              </View>
            </View>

            {sections.map((section) => (
              <View key={section.title} style={styles.group}>
                <Text style={styles.groupTitle}>{section.title}</Text>
                {section.items.map((item, index) => (
                  <React.Fragment key={item.label}>
                    <TouchableOpacity style={styles.menuItem} onPress={item.onPress}>
                      <View style={[styles.menuIcon, item.danger && styles.menuIconDanger]}>
                        <Ionicons
                          name={item.icon as any}
                          size={20}
                          color={item.danger ? '#EF4444' : '#3B82F6'}
                        />
                      </View>
                      <Text style={[styles.menuLabel, item.danger && styles.menuLabelDanger]}>
                        {item.label}
                      </Text>
                      <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                    </TouchableOpacity>
                    {index < section.items.length - 1 && <View style={styles.divider} />}
                  </React.Fragment>
                ))}
              </View>
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
  group: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 12,
    gap: 4,
  },
  groupTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#94A3B8',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 4,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 11,
  },
  toggleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 11,
  },
  menuIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIconDanger: {
    backgroundColor: '#FEF2F2',
  },
  menuLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A2E',
  },
  menuLabelDanger: {
    color: '#EF4444',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginLeft: 48,
  },
});
