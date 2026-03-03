/**
 * IceDemo.tsx — Démo IceButton + EventCard
 * Affiche tous les variants des deux composants
 */

import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IceButton } from './Icebutton';
import { EventCard } from './EventCard';

/* Image placeholder (remplacer par vos assets) */
const PLACEHOLDER = { uri: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800' };
const PLACEHOLDER2 = { uri: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800' };

export default function IceDemo() {
  const [loading, setLoading] = useState(false);

  const fakeLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <ScrollView
      className="flex-1 "
      contentContainerClassName="px-4 pb-10 pt-14 gap-y-8"
      showsVerticalScrollIndicator={false}>
      {/* ══ SECTION: IceButton ══════════════════════════════ */}
      <View className="gap-y-1">
        <Text className="mb-3 font-inter text-[10px] uppercase tracking-[1.5px] text-text-muted-dark">
          IceButton — Variants
        </Text>

        {/* Primary */}
        <IceButton
          tKey="common.select"
          label="Select"
          variant="primary"
          size="lg"
          onPress={() => {}}
          leftIcon={<Ionicons name="ticket-outline" size={18} color="#fff" />}
        />

        {/* Outline */}
        <IceButton
          tKey="common.signIn"
          label="Se connecter"
          variant="outline"
          size="md"
          onPress={() => {}}
          leftIcon={<Ionicons name="log-in-outline" size={16} color="#42A5F5" />}
        />

        {/* Ghost */}
        <IceButton
          tKey="common.seeAll"
          label="Voir tout"
          variant="ghost"
          size="sm"
          onPress={() => {}}
          rightIcon={<Ionicons name="chevron-forward" size={14} color="#42A5F5" />}
        />

        {/* White */}
        <View className="rounded-xl bg-[#0066FF] p-3">
          <IceButton
            tKey="kyc.verify"
            label="Vérifier mon identité (KYC)"
            variant="white"
            size="md"
            onPress={() => {}}
            leftIcon={<Ionicons name="shield-checkmark-outline" size={16} color="#0066FF" />}
          />
        </View>

        {/* Danger */}
        <IceButton
          tKey="common.delete"
          label="Supprimer"
          variant="danger"
          size="sm"
          onPress={() => {}}
        />

        {/* Loading */}
        <IceButton
          tKey="common.confirm"
          label="Confirmer"
          variant="primary"
          size="md"
          isLoading={loading}
          onPress={fakeLoad}
        />

        {/* Disabled */}
        <IceButton
          tKey="common.select"
          label="Désactivé"
          variant="primary"
          size="md"
          disabled
          onPress={() => {}}
        />

        {/* Row de petits boutons (fullWidth=false) */}
        <View className="mt-1 flex-row gap-x-3">
          <IceButton
            tKey="event.recharge"
            label="Recharger"
            variant="outline"
            size="sm"
            fullWidth={false}
            onPress={() => {}}
          />
          <IceButton
            tKey="event.pay"
            label="Payer"
            variant="primary"
            size="sm"
            fullWidth={false}
            onPress={() => {}}
          />
        </View>
      </View>

      {/* Divider */}
      <View className="h-px bg-white/[0.07]" />

      {/* ══ SECTION: EventCard vertical ═════════════════════ */}
      <View className="gap-y-3">
        <Text className="font-inter text-[10px] uppercase tracking-[1.5px] text-text-muted-dark">
          EventCard — Vertical (grid)
        </Text>

        <View className="flex-row gap-x-3">
          {/* Card 1 — Top Deal */}
          <View className="flex-1">
            <EventCard
              image={PLACEHOLDER}
              title="Festival XXX"
              subtitle="Aapmonestr • 1 min"
              price="27,9€"
              badge="top-deal"
              onPress={() => {}}
              onBuy={() => {}}
            />
          </View>

          {/* Card 2 — Countdown */}
          <View className="flex-1">
            <EventCard
              image={PLACEHOLDER2}
              title="Concert Night"
              subtitle="Centre Culturel • 3 km"
              price="57,9€"
              badge="countdown"
              countdown="01:39"
              onPress={() => {}}
              onBuy={() => {}}
            />
          </View>
        </View>

        {/* Card pleine largeur — Verified */}
        <EventCard
          image={PLACEHOLDER}
          title="Top Toone — Spéciale"
          subtitle="Aapmonestr • 2 km • 2 086 personnes"
          price="57,9€"
          badge="verified"
          onPress={() => {}}
          onBuy={() => {}}
        />
      </View>

      {/* Divider */}
      <View className="h-px bg-white/[0.07]" />

      {/* ══ SECTION: EventCard horizontal ═══════════════════ */}
      <View className="gap-y-3">
        <Text className="font-inter text-[10px] uppercase tracking-[1.5px] text-text-muted-dark">
          EventCard — Horizontal (Market / liste)
        </Text>

        <EventCard
          image={PLACEHOLDER}
          title="Festival XXX"
          subtitle="Aapmonestr • 3xml"
          price="18,00 €"
          badge="top-deal"
          variant="horizontal"
          onPress={() => {}}
          onBuy={() => {}}
        />

        <EventCard
          image={PLACEHOLDER2}
          title="Festival XXX — Premium"
          subtitle="Aapmonestr • 2xml"
          price="19,00 €"
          variant="horizontal"
          onPress={() => {}}
          onBuy={() => {}}
        />
      </View>
    </ScrollView>
  );
}
