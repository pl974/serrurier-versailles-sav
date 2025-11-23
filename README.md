# Serrurier Versailles SAV

Site web professionnel pour un service de serrurerie à Versailles et ses environs.

## 🚀 Caractéristiques

- **Framework** : Astro JS pour des performances optimales
- **Styling** : Tailwind CSS pour un design moderne et responsive
- **SEO** : Optimisation complète avec métadonnées, Schema.org et sitemap
- **Performance** : Génération de pages statiques pour une vitesse maximale
- **UI/UX** : Interface utilisateur exceptionnelle et user-friendly
- **Conversion** : CTA optimisés et formulaires de contact stratégiquement placés

## 📁 Structure du projet

```
/
├── public/              # Fichiers statiques (images, favicon, etc.)
├── src/
│   ├── components/      # Composants Astro réutilisables
│   │   ├── SEO.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── CTASection.astro
│   │   ├── ServiceCard.astro
│   │   └── CityCard.astro
│   ├── data/            # Données structurées
│   │   ├── services.ts
│   │   └── cities.ts
│   ├── layouts/         # Layouts de page
│   │   └── BaseLayout.astro
│   └── pages/           # Pages du site (routing automatique)
│       ├── index.astro
│       ├── services/
│       │   ├── index.astro
│       │   └── [slug].astro
│       ├── villes/
│       │   ├── index.astro
│       │   └── [slug].astro
│       ├── contact.astro
│       └── tarifs.astro
├── astro.config.mjs     # Configuration Astro
├── tailwind.config.mjs  # Configuration Tailwind
└── package.json
```

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build
npm run preview
```

## 📈 SEO

Le site est optimisé pour le référencement avec :

- Métadonnées complètes (title, description, Open Graph, Twitter Cards)
- Schema.org markup pour les rich snippets
- Sitemap XML généré automatiquement
- URLs canoniques
- Structure HTML sémantique
- Temps de chargement optimisé
- Mobile-first responsive design

## 🎨 Design

- Palette de couleurs professionnelle
- Typographie optimisée pour la lisibilité
- Composants réutilisables et modulaires
- Animations subtiles pour améliorer l'UX
- Images au format WebP pour des performances optimales

## 📱 Pages principales

1. **Accueil** : Présentation du service avec CTA au-dessus de la ligne de flottaison
2. **Services** : Liste complète des prestations de serrurerie
3. **Villes** : Zones d'intervention avec maillage interne
4. **Contact** : Formulaire et informations de contact
5. **Tarifs** : Grille tarifaire transparente

## 🔧 Technologies utilisées

- **Astro** : Framework web moderne
- **Tailwind CSS** : Framework CSS utility-first
- **TypeScript** : Pour un code type-safe
- **Schema.org** : Markup sémantique pour le SEO

## 📝 Licence

Tous droits réservés - Serrurier Versailles SAV
