# 📚 TechnoKit

> Mon atelier numérique pour organiser et structurer mes cours de technologie au collège

![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 À propos

**LessonLab** est une application web personnelle qui me sert de memento interactif et d'outil d'organisation pour mes cours de technologie en collège (cycle 4). 

Ce projet répond à un double objectif :
- 🎓 **Professionnel** : Centraliser et structurer mes séquences pédagogiques, fiches d'activités, et suivis de compétences
- 💻 **Apprentissage** : Me former au développement web moderne avec React tout en créant un outil réellement utile

## ✨ Fonctionnalités prévues

### Phase 1 - MVP (Minimum Viable Product)
- [ ] 📋 Liste des séquences pédagogiques par niveau (5ème, 4ème, 3ème)
- [ ] 📝 Création et édition de fiches d'activités
- [ ] 🎯 Tableau de suivi des compétences du cycle 4
- [ ] 🔍 Recherche et filtres par thématique/niveau

### Phase 2 - Enrichissement
- [ ] 📊 Visualisation des progressions annuelles
- [ ] 📎 Gestion des ressources numériques (liens, fichiers)
- [ ] 🗓️ Calendrier de planification des séances
- [ ] 📈 Statistiques de couverture du programme

### Phase 3 - Avancé
- [ ] 🤖 Générateur de fiches avec templates
- [ ] 🔗 Export vers formats standards (PDF, HTML)
- [ ] 💾 Sauvegarde cloud et synchronisation
- [ ] 📱 Version mobile responsive

## 🛠️ Stack technique

- **Frontend** : React 18+ avec Hooks
- **Styling** : CSS Modules / Tailwind CSS (à définir)
- **Routing** : React Router
- **État** : Context API / Redux (selon besoins)
- **Déploiement** : Vercel
- **Versionning** : Git / GitHub

## 🚀 Installation et développement

### Prérequis
```bash
Node.js >= 18.x
npm ou yarn
```

### Installation
```bash
# Cloner le repository
git clone https://github.com/[votre-username]/lessonlab.git

# Installer les dépendances
cd lessonlab
npm install

# Lancer en mode développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173` (ou le port par défaut de Vite)

### Build de production
```bash
npm run build
```

## 📁 Structure du projet

```
technokit/                    # Racine de votre projet
├── package.json              ← À la racine
├── vite.config.js            ← À la racine
├── index.html                ← À la racine
├── .gitignore                ← À la racine
├── README.md                 ← À la racine
└── src/                      ← Créer ce dossier
    ├── main.jsx              ← Dans src/
    ├── App.jsx               ← Dans src/
    ├── App.css               ← Dans src/
    └── index.css             ← Dans src/
```

## 🎓 Contexte pédagogique

Cette application est conçue pour le programme de **Technologie au collège - Cycle 4** (BO n°9 du 29 février 2024) qui couvre :

- **5ème** : Découverte des objets techniques, identité numérique, évolution des OST
- **4ème** : Conception et modélisation, outils numériques, impression 3D
- **3ème** : Objets connectés, programmation Python, robotique, projets complexes

### Les 9 compétences du cycle 4
1. Imaginer une solution en réponse à un besoin
2. Réaliser une représentation numérique d'un objet
3. Utiliser des outils numériques
4. Analyser le fonctionnement d'un système
5. Identifier les flux d'informations
6. Comprendre et modifier un programme
7. Comparer et commenter des évolutions
8. Présenter à l'oral et à l'écrit
9. Concevoir, écrire et tester un programme

## 🗺️ Roadmap

- **Q1 2025** : Architecture de base + page d'accueil
- **Q2 2025** : Gestion des séquences et fiches
- **Q3 2025** : Tableau des compétences et recherche
- **Q4 2025** : Fonctionnalités avancées et optimisations

## 🤝 Contribution

Ce projet est personnel et principalement à but d'apprentissage. Cependant, si vous êtes enseignant·e de technologie et souhaitez contribuer ou adapter l'outil, n'hésitez pas à :
- 🐛 Signaler des bugs
- 💡 Proposer des améliorations
- 🔀 Forker le projet pour votre usage

## 📝 License

MIT License - Libre d'utilisation et d'adaptation

## 👨‍🏫 Auteur

Professeur de Technologie au collège
- 📧 [Votre email]
- 🔗 [Votre portfolio/site si vous en avez un]

---

**Note** : Ce projet est en cours de développement actif. Les fonctionnalités et la structure peuvent évoluer.

*Dernière mise à jour : Novembre 2025*
