````markdown
# 🧊 IcePass Design System (v1.0)

**Système de Design Unifié : Expérience Immersive & Sécurisée**  

Ce document définit les standards visuels et techniques d'IcePass, garantissant une cohérence entre l'application mobile (React Native), la plateforme de gestion (Next.js) et les supports marketing. L’esthétique repose sur le contraste entre la pureté de la glace ("Ice") et l’énergie des événements ("Pass").

---

## 1. Identité de Marque & Logotype

Le logo IcePass est un élément clé de confiance et doit être utilisé avec soin.

### 📐 Construction et Grille
- **Isotype (Symbole)** : Deux tickets superposés avec une étoile centrale, inclinaison de 45°.
- **Wordmark (Texte)** : Typographie sur-mesure, large et angulaire, avec incisions horizontales sur 'E' et 'A'.
- **Zone d'Exclusion** : Marge égale à 50% de la largeur de l'isotype autour du logo.

### 🔄 Déclinaisons
- **Positive (Light)** : Texte Noir (#0A0A0A) + Isotype en dégradé Ice-Blue.
- **Negative (Dark)** : Texte Blanc (#FFFFFF) + Isotype en dégradé Ice-Blue.
- **Monochrome** : Pour documents administratifs ou impressions basse qualité.

---

## 2. Système Chromatique (Color Tokens)

IcePass utilise des Design Tokens pour gérer les thèmes clair et sombre.

### 💎 Couleurs Core
| Token        | HEX / Gradient                                         | Usage |
|--------------|--------------------------------------------------------|-------|
| primary-ice  | #00F0FF                                                | Focus, éléments actifs |
| primary-blue | #0066FF                                                | Confiance, structure, liens |
| ice-gradient | linear-gradient(135deg, #00F0FF 0%, #0066FF 100%)    | CTA, boutons, en-têtes |

### 🌗 Thèmes & Surfaces
| Rôle          | Thème Sombre (OLED) | Thème Clair (Snow) |
|---------------|-------------------|------------------|
| Fond d'écran  | #000000            | #F8FAFC          |
| Surface (Cartes)| #121212          | #FFFFFF          |
| Élévation Pop-ups | #1E1E1E        | #F1F5F9          |
| Texte Principal| #FFFFFF           | #0F172A          |
| Texte Secondaire| #94A3B8          | #475569          |

---

## 3. Typographie

| Élément         | Police    | Style         | Usage                                  |
|-----------------|-----------|---------------|---------------------------------------|
| Titres / Display| Poppins   | Bold 700 / SemiBold 600 | En-têtes, prix, noms événements |
| Corps de texte  | Inter     | Regular 400 / Medium 500 | Formulaires, descriptions |

---

## 4. Composants Atomiques (UI Kit)

### 🔘 Boutons (IceAction)
- **Primaire** : Fond dégradé, coins arrondis 12px, box-shadow cyan (0 4px 20px rgba(0,240,255,0.2))
- **Secondaire** : Contour 1.5px monochrome, fond transparent.
- **Micro-interactions** : Scale 0.98 au clic pour feedback visuel.

### 🎫 Cartes Événements (TicketCards)
- **Structure** : Image ratio 16:9 en haut, infos en bas sur fond surface.
- **Indicateurs** : Badges "Vérifié" ou "Top Deal" avec opacité 15%.
- **Bordures** : Thème sombre → 1px, opacité 8% de blanc.

---

## 5. Layout & Spacing

- **Grille** : 8px / 16px base pour alignement cohérent.  
- **Marges / Padding** : Multiples de 8 pour une symétrie visuelle.  
- **Arrondis** : Petits 4px, moyens 8px, grands 16px.  
- **Ombres** : Subtiles, adaptées aux thèmes sombre et clair.

---

## 6. Effets & Micro-interactions

- **Hover / Press** : Scale 0.98 pour boutons et cartes.  
- **Transitions** : 150ms, easing `ease-in-out` pour fluidité.  
- **Glassmorphism** : Opacité 70%, blur 12px, bordure 1px rgba(255,255,255,0.08).

---

## 7. Architecture CSS / Design Tokens

```css
@import "tailwindcss";

@theme {
  --color-ice-cyan: #00F0FF;
  --color-ice-blue: #0066FF;

  --color-bg-app: #000000;
  --color-bg-card: #121212;
  --color-text-main: #FFFFFF;
  --color-text-muted: #94A3B8;

  @variant light {
    --color-bg-app: #F8FAFC;
    --color-bg-card: #FFFFFF;
    --color-text-main: #0F172A;
    --color-text-muted: #475569;
  }

  --radius-xl: 16px;
  --shadow-neon: 0 0 25px -5px rgba(0,240,255,0.4);
}

@layer utilities {
  .glass {
    background: color-mix(in srgb, var(--color-bg-card) 70%, transparent);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }
}
````

---

## 8. Conventions de Nommage & Structure de Fichiers

### 8.1 Screens / Pages

* Nom de fichier : `PascalCaseScreen.tsx` (ex : `HomeScreen.tsx`)
* Nom à afficher (header) : `title="Home"` dans Stack.Screen
* Chaque screen exporte une fonction **nommée identique au fichier**

### 8.2 Composants

* Fichier : `PascalCase.tsx` (ex : `TicketCard.tsx`)
* Props : camelCase (ex : `isActive`, `onPress`)
* JSDoc obligatoire pour chaque prop et fonction

### 8.3 Hooks

* Nom de fichier : `useNomHook.ts` (ex : `useFetchTickets.ts`)
* Chaque hook retourne un objet ou tableau avec **des noms clairs** :

  ```ts
  const { data, error, loading } = useFetchTickets();
  ```

### 8.4 Services & API

* Fichier : `resourceService.ts` (ex : `ticketsService.ts`)
* Utilisation RTK Query pour consommation API :

```ts
const { data, isLoading } = useGetTicketsQuery();
```

* Client HTTP : `axiosClient.ts` ou `fetchClient.ts` centralisé

### 8.5 Redux Toolkit (RTK)

* Slices : `PascalCaseSlice.ts`
* State, reducers et actions documentés avec JSDoc
* Store central : `store.ts`

### 8.6 Style

* Utiliser **NativeWind / Tailwind** pour tous les composants
* Pas de styles inline sauf cas spécifique
* Variables CSS / tokens pour couleurs, padding, marges, ombres

---

## 9. Bonnes pratiques

* Toujours documenter fonctions, props et hooks avec **JSDoc**
* Utiliser **camelCase pour fonctions, props, variables**
* Utiliser **PascalCase pour composants et screens**
* Fichier index.ts pour **export centralisé**
* Réutiliser les composants et hooks pour éviter duplication

---

Ce guide couvre maintenant toutes les conventions **design et développement** pour IcePass, y compris :

* Nom de fichiers, hooks, screens, composants
* Props et functions naming
* Services, RTK et consommation API
* Style, spacing, couleurs et micro-interactions

---
