import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IceButton } from '@/app/components/Icebutton';
import { Background } from '@/app/components/Background';
import { Colors } from '@/constants/token';
import { useRouter } from 'expo-router';

const ARTISTS = [
  { id: '1', name: 'Drake', emoji: '' },
  { id: '2', name: 'Taylor Swift', emoji: '' },
  { id: '3', name: 'The Weeknd', emoji: '' },
  { id: '4', name: 'Beyoncé', emoji: '' },
  { id: '5', name: 'Kendrick', emoji: '' },
  { id: '6', name: 'Billie', emoji: '' },
  { id: '7', name: 'Post Malone', emoji: '' },
  { id: '8', name: 'Dua Lipa', emoji: '' },
  { id: '9', name: 'J. Cole', emoji: '' },
];

export function OnboardingArtist() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([ARTISTS[0].id]);

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  };

  const handleFinish = () => {
    if (selected.length < 3) {
      alert('Veuillez sélectionner au moins 3 artistes.');
      return;
    }

    router.push('/login');
  };

  return (
    <Background>
      <View style={{ flex: 1 }}>
        {/* ── HAUT ── */}
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.title}>Onboarding</Text>
        </View>

        {/* ── FOND BLANC ── */}
        <View style={styles.cardFirstContain}>
          <View style={styles.bottomCard}>
            <Text style={styles.cardTitle}>Sélectionnez des artistes</Text>
            <Text style={styles.cardSub}>( Minimum 3 artistes )</Text>

            {/* ── Tags ── */}
            <View style={styles.tagsWrap}>
              {ARTISTS.map((artist) => {
                const isOn = selected.includes(artist.id);
                return (
                  <TouchableOpacity
                    key={artist.id}
                    activeOpacity={0.75}
                    onPress={() => toggle(artist.id)}
                    style={[styles.tag, isOn && styles.tagSelected]}>
                    <Text style={[styles.tagText, isOn && styles.tagTextSelected]}>
                      {artist.name}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            {/* ── Bouton ── */}
            <View style={styles.btnSelect}>
              <IceButton
                tKey="common.finish"
                label="Terminer"
                variant="ice"
                size="md"
                onPress={handleFinish}
              />
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
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
    paddingHorizontal: 24,
    paddingTop: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 12,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A2E',
    textAlign: 'center',
    marginBottom: 4,
  },

  cardSub: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 20,
  },

  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  tag: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(0,102,255,0.07)',
    borderWidth: 1.5,
    borderColor: Colors.outline,
  },

  tagSelected: {
    backgroundColor: Colors.primaryBlue,
    borderColor: Colors.primaryBlue,
  },

  tagText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.outline,
  },

  tagTextSelected: {
    color: '#FFFFFF',
  },

  btnSelect: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 8,
  },
});
