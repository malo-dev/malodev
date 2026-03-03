```markdown
# 🧊 IcePass (v1.0)  

**Système de Design Unifié : Expérience Immersive & Sécurisée**  

IcePass est une solution tout-en-un pour la billetterie et le cashless, combinant sécurité, fluidité et immersion. Ce README est destiné aux développeurs pour comprendre la structure, la stack, les conventions et le workflow du projet.

---

## Table des Matières

1. [À propos d'IcePass](#à-propos-dicepass)  
2. [Stack Technique](#stack-technique)  
3. [Structure du Projet & Conventions](#structure-du-projet--conventions)  
4. [Composants et Design System](#composants-et-design-system)  
5. [Services API & State Management](#services-api--state-management)  
6. [Installation & Développement](#installation--développement)  
7. [Contributeurs](#contributeurs)  
8. [Licence](#licence)

---

## À propos d'IcePass

IcePass permet de gérer les billets d’événements et les paiements cashless de manière sécurisée et fluide.  
- 🔐 Sécurité maximale contre la fraude  
- 💎 Marketplace officielle pour billets entre particuliers  
- 🎵 Intégration musicale intelligente (Spotify / Deezer)  
- ⚡ File d’attente virtuelle pour forte affluence  

---

## Stack Technique

- **Frontend Mobile** : React Native + TypeScript + NativeWind + Expo  
- **Frontend Web / Admin** : Next.js + Tailwind CSS + TypeScript  
- **Backend** : Rust (API sécurisée et performante)  
- **State Management** : Redux Toolkit / Zustand / Recoil  
- **Base de données** : PostgreSQL ou équivalent  
- **CI/CD** : GitHub Actions / Expo Application Services  

---

## Structure du Projet & Conventions

```

IcePass/
│
├─ .expo/                  # Dossier géré par Expo (ne pas toucher)
├─ assets/                 # Images, fonts, icônes, vidéos
│   ├─ fonts/
│   ├─ images/
│   └─ icons/
│
├─ .
│   ├─ api/                # Services API
│   │   ├─ clients/        # Config Axios / fetch / Rust API client
│   │   ├─ services/       # Fonctions CRUD pour chaque ressource
│   │   └─ index.ts        # Export central
│   │
│   ├─ components/         # Composants réutilisables
│   │   ├─ Button/
│   │   │   ├─ Button.tsx
│   │   │   └─ Button.stories.tsx
│   │   ├─ Card/
│   │   └─ index.ts
│   │
│   ├─ constants/          # Couleurs, tailles, routes, tokens
│   ├─ hooks/              # Hooks personnalisés
│   │   ├─ useAuth.ts
│   │   ├─ useFetch.ts
│   │   └─ index.ts
│   │
│   ├─ navigation/         # Stack, Tabs, Drawer
│   │   ├─ AppNavigator.tsx
│   │   └─ index.ts
│   │
│   ├─ screens/            # Écrans de l’application
│   │   ├─ HomeScreen.tsx
│   │   ├─ ProfileScreen.tsx
│   │   └─ index.ts
│   │
│   ├─ store/              # Redux Toolkit / Zustand / Recoil
│   │   ├─ slices/
│   │   ├─ store.ts
│   │   └─ index.ts
│   │
│   ├─ utils/              # Fonctions utilitaires
│   └─ App.tsx             # Point d’entrée
│
├─ .gitignore
├─ app.json
├─ babel.config.js
├─ package.json
├─ README.md
└─ STYLEGUIDE.md

````

### Conventions de nommage

- **Screens / Pages** : `PascalCase + Screen.tsx`  
- **Hooks** : `useNomHook.ts`  
- **Composants** : `PascalCase.tsx` + `PascalCase.stories.tsx`  
- **Services API** : `resourceService.ts`  
- **Clients API** : `axiosClient.ts` ou `fetchClient.ts`  

---

## Composants et Design System

- Couleurs : Tokens définis dans `constants/colors.ts` et `STYLEGUIDE.md`  
- Typographie : Poppins (titres) et Inter (corps)  
- Boutons : `IceAction` (primaire / secondaire / interactions)  
- Cartes : `TicketCards` avec badges et bordures thématiques  
- Effets : Glassmorphism, ombres et transitions fluides  

---

## Services API & State Management

### Exemple Service API (RTK Query)

```ts
// src/api/services/ticketsService.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Ticket } from '../../types';

export const ticketsApi = createApi({
  reducerPath: 'ticketsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.icepass.com' }),
  endpoints: (builder) => ({
    getTickets: builder.query<Ticket[], void>({
      query: () => '/tickets',
    }),
    createTicket: builder.mutation<Ticket, Partial<Ticket>>({
      query: (ticket) => ({
        url: '/tickets',
        method: 'POST',
        body: ticket,
      }),
    }),
  }),
});

export const { useGetTicketsQuery, useCreateTicketMutation } = ticketsApi;
````

### Exemple JSDoc pour Hook

```ts
/**
 * useAuth Hook
 * @description Gestion de l’authentification utilisateur
 * @returns {object} user, login, logout
 */
export const useAuth = () => {
  // logique
};
```

### Exemple JSDoc pour Composant

```ts
/**
 * Button Component
 * @param {string} label - Texte du bouton
 * @param {() => void} onPress - Callback au clic
 * @param {'primary' | 'secondary'} variant - Style du bouton
 */
const Button: React.FC<ButtonProps> = ({ label, onPress, variant }) => {
  return (
    <Pressable onPress={onPress} className={variant === 'primary' ? 'bg-gradient' : 'border'}>
      <Text>{label}</Text>
    </Pressable>
  );
};
```

---

## Installation & Développement

1. Cloner le repo :

```bash
git clone git@github.com:teamkotana/icepass.git
cd icepass
```

1. Installer dépendances :

```bash
npm install
```

1. Lancer Expo (mobile) :

```bash
npm start
```

1. Backend Rust :

```bash
cd backend
cargo run
```

1. Web / Admin Next.js :

```bash
cd admin
npm run dev
```

---

## Contributeurs

* **Frank Leader** – Product & Team Lead
* **Nematta** – Développeur Fullstack / Rust & API
* **Team Kotana** – Mobile & Frontend
* **Mushio Ataulwa** – React Native, UI/UX

---

## Licence

Projet interne de **Team Kotana** – toute utilisation externe nécessite autorisation.

```

---

💡 Ce README couvre :  
- Stack technique complète  
- Structure du projet et conventions de fichiers  
- Services API et RTK  
- Exemples JSDoc pour composants et hooks  
- Design system et UI guidelines  
- Installation et contribu
