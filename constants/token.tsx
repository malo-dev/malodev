/**
 * tokens.ts — ICEPASS Design System
 * Source unique de vérité pour toutes les couleurs
 */

export const Colors = {
  /* ── Brand ── */
  primaryIce: '#00F0FF',
  primaryBlue: '#0066FF',

  /* ── Backgrounds ── */
  bgAppDark: '#000000',
  bgCardDark: '#121212',
  bgAppLight: '#F8FAFC',
  bgCardLight: '#FFFFFF',

  /* ── Textes ── */
  textMainDark: '#FFFFFF',
  textMutedDark: '#94A3B8',
  textMainLight: '#0F172A',
  textMutedLight: '#475569',

  /* ── États ── */
  danger: '#EF4444',
  dangerDark: '#B91C1C',
  outline: '#42A5F5',

  /* ── Gradients (tableaux pour LinearGradient) ── */
  gradientIce: ['#0066FF', '#00F0FF', '#0066FF'] as const,
  gradientDanger: ['#EF4444', '#B91C1C'] as const,
  gradientPrimary: ['#0066FF', '#0044CC'] as const,
} as const;
