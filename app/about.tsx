import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useApp } from '@/app/context/AppContext';

const VERSION = '1.0.0';

const LINKS = [
  { icon: 'document-text-outline', label: "Conditions d'utilisation", url: '' },
  { icon: 'lock-closed-outline', label: 'Politique de confidentialité', url: '' },
  { icon: 'help-circle-outline', label: "Centre d'aide", url: '' },
  { icon: 'chatbubble-outline', label: 'Nous contacter', url: '' },
];

export default function About() {
  const router = useRouter();
  const { theme, t } = useApp();

  return (
    <Background>
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.title}>{t('about')}</Text>
          <View style={{ width: 24 }} />
        </View>
      </View>

      <View style={[styles.cardFirstContain, { backgroundColor: theme.bg }]}>
        <View style={[styles.bottomCard, { backgroundColor: theme.card }]}>
          <ScrollView contentContainerStyle={{ padding: 16, gap: 20 }}>

            {/* Logo section */}
            <View style={styles.logoSection}>
              <View style={styles.logo}>
                <Ionicons name="snow-outline" size={36} color="#fff" />
              </View>
              <Text style={styles.appName}>IcePasse</Text>
              <Text style={styles.appVersion}>Version {VERSION}</Text>
              <Text style={styles.appTagline}>
                La plateforme de billetterie nouvelle génération.
              </Text>
            </View>

            {/* Description */}
            <View style={styles.descCard}>
              <Text style={styles.descText}>
                IcePasse est une application de billetterie mobile qui vous permet d'acheter, gérer et présenter vos billets pour vos événements préférés. Avec IceCash, payez facilement et en toute sécurité directement depuis l'application.
              </Text>
            </View>

            {/* Links */}
            <View style={styles.group}>
              {LINKS.map((link, index) => (
                <React.Fragment key={link.label}>
                  <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => link.url ? Linking.openURL(link.url) : {}}>
                    <View style={styles.menuIcon}>
                      <Ionicons name={link.icon as any} size={20} color="#3B82F6" />
                    </View>
                    <Text style={styles.menuLabel}>{link.label}</Text>
                    <Ionicons name="chevron-forward" size={18} color="#CBD5E1" />
                  </TouchableOpacity>
                  {index < LINKS.length - 1 && <View style={styles.divider} />}
                </React.Fragment>
              ))}
            </View>

            {/* Footer */}
            <Text style={styles.footer}>
              © 2024 IcePasse · Tous droits réservés
            </Text>

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
  logoSection: {
    alignItems: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 24,
    backgroundColor: '#1A1A2E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  appName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1A1A2E',
  },
  appVersion: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '500',
  },
  appTagline: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 4,
  },
  descCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 16,
    padding: 16,
  },
  descText: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 20,
  },
  group: {
    backgroundColor: '#F8FAFC',
    borderRadius: 20,
    padding: 12,
  },
  menuItem: {
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
  menuLabel: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A2E',
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginLeft: 48,
  },
  footer: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    paddingBottom: 8,
  },
});
