import React from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Background } from '@/app/components/Background';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useApp, Lang } from '@/app/context/AppContext';

const MENU_KEYS = [
  { icon: 'settings-outline', tKey: 'settings', route: '/settings' },
  { icon: 'time-outline', tKey: 'history', route: '/history' },
  { icon: 'notifications-outline', tKey: 'notifications', route: '/notifications' },
  { icon: 'information-circle-outline', tKey: 'about', route: '/about' },
] as const;

const LANGS: { label: string; value: Lang }[] = [
  { label: 'FR', value: 'FR' },
  { label: 'EN', value: 'EN' },
  { label: 'AR', value: 'AR' },
];

export default function Profile() {
  const router = useRouter();
  const { theme, darkMode, setDarkMode, language, setLanguage, t } = useApp();

  return (
    <Background>
      <View style={styles.topSection}>
        <View style={styles.headerRow}>
          <View style={{ width: 32 }} />
          <Text style={styles.title}>{t('profile')}</Text>
          <TouchableOpacity>
            <Ionicons name="ellipsis-horizontal" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.cardFirstContain, { backgroundColor: theme.bg }]}>
        <View style={[styles.bottomCard, { backgroundColor: theme.card }]}>
          <ScrollView contentContainerStyle={{ padding: 16, gap: 6 }}>

            {/* Avatar */}
            <View style={styles.avatarSection}>
              <View style={styles.avatar}>
                <Ionicons name="person" size={36} color="#fff" />
              </View>
              <View style={styles.userInfo}>
                <Text style={[styles.userName, { color: theme.text }]}>John Doe</Text>
                <Text style={[styles.userEmail, { color: theme.subtext }]}>john.doe@email.com</Text>
              </View>
              <TouchableOpacity style={[styles.editBtn, { backgroundColor: theme.cardSecondary }]}>
                <Ionicons name="pencil-outline" size={18} color={theme.subtext} />
              </TouchableOpacity>
            </View>

            <View style={[styles.divider, { backgroundColor: theme.divider }]} />

            {/* Menu */}
            {MENU_KEYS.map((item) => (
              <TouchableOpacity
                key={item.route}
                style={styles.menuItem}
                onPress={() => router.push(item.route as any)}>
                <View style={[styles.menuIcon, { backgroundColor: theme.iconBg }]}>
                  <Ionicons name={item.icon as any} size={20} color={theme.icon} />
                </View>
                <Text style={[styles.menuLabel, { color: theme.text }]}>{t(item.tKey)}</Text>
                <Ionicons name="chevron-forward" size={18} color={theme.border} />
              </TouchableOpacity>
            ))}

            <View style={[styles.divider, { backgroundColor: theme.divider }]} />

            {/* Mode sombre */}
            <View style={styles.menuItem}>
              <View style={[styles.menuIcon, { backgroundColor: theme.iconBg }]}>
                <Ionicons name="moon-outline" size={20} color={theme.icon} />
              </View>
              <Text style={[styles.menuLabel, { color: theme.text }]}>{t('darkMode')}</Text>
              <Switch
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: theme.border, true: theme.icon }}
                thumbColor="#fff"
              />
            </View>

            {/* Langue */}
            <View style={styles.menuItem}>
              <View style={[styles.menuIcon, { backgroundColor: theme.iconBg }]}>
                <Ionicons name="language-outline" size={20} color={theme.icon} />
              </View>
              <Text style={[styles.menuLabel, { color: theme.text }]}>{t('language')}</Text>
              <View style={[styles.langToggle, { borderColor: theme.border }]}>
                {LANGS.map((l) => (
                  <TouchableOpacity
                    key={l.value}
                    style={[
                      styles.langBtn,
                      { backgroundColor: theme.cardSecondary },
                      language === l.value && { backgroundColor: '#1A1A2E' },
                    ]}
                    onPress={() => setLanguage(l.value)}>
                    <Text style={[
                      styles.langText,
                      { color: theme.subtext },
                      language === l.value && { color: '#fff' },
                    ]}>
                      {l.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={[styles.divider, { backgroundColor: theme.divider }]} />

            {/* Logout */}
            <TouchableOpacity style={styles.logoutBtn}>
              <Ionicons name="log-out-outline" size={20} color="#EF4444" />
              <Text style={styles.logoutText}>{t('logout')}</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  topSection: { flex: 1, justifyContent: 'center', paddingHorizontal: 20 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontSize: 22, fontWeight: '800', color: '#FFFFFF', letterSpacing: 0.5 },
  cardFirstContain: { flex: 2, paddingHorizontal: 10, paddingBottom: 40 },
  bottomCard: {
    marginTop: -40, flex: 1, borderRadius: 32, paddingTop: 8,
    shadowColor: '#000', shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1, shadowRadius: 16, elevation: 12,
  },
  avatarSection: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 8 },
  avatar: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#3B82F6', alignItems: 'center', justifyContent: 'center' },
  userInfo: { flex: 1, gap: 3 },
  userName: { fontSize: 17, fontWeight: '700' },
  userEmail: { fontSize: 12 },
  editBtn: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center' },
  divider: { height: 1, marginVertical: 4 },
  menuItem: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 13 },
  menuIcon: { width: 36, height: 36, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  menuLabel: { flex: 1, fontSize: 14, fontWeight: '600' },
  langToggle: { flexDirection: 'row', borderRadius: 8, overflow: 'hidden', borderWidth: 1 },
  langBtn: { paddingHorizontal: 10, paddingVertical: 5 },
  langText: { fontSize: 12, fontWeight: '700' },
  logoutBtn: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 13 },
  logoutText: { fontSize: 14, fontWeight: '600', color: '#EF4444' },
});
