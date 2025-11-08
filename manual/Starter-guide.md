# 🚀 Guide de démarrage TechnoKit - Commandes à lancer

## 📋 Étape par étape dans votre Codespace GitHub

### 1️⃣ Vérifier l'environnement
```bash
# Vérifier que Node.js est bien installé
node --version
# Devrait afficher v18.x ou supérieur

# Vérifier npm
npm --version
# Devrait afficher v9.x ou supérieur
```

---

### 2️⃣ Placer les fichiers dans votre projet

Vous devez copier tous les fichiers que je vous ai fournis dans votre dépôt GitHub. Voici la structure à respecter :

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

**Dans le terminal de votre Codespace :**

```bash
# Se placer dans le dossier de votre projet (si pas déjà fait)
cd /workspaces/technokit

# Créer le dossier src si nécessaire
mkdir -p src

# Vérifier que les fichiers sont bien là
ls -la
# Vous devriez voir : package.json, vite.config.js, index.html, etc.

ls -la src/
# Vous devriez voir : main.jsx, App.jsx, App.css, index.css
```

---

### 3️⃣ Installer les dépendances

**C'est LA commande la plus importante** - elle télécharge React, Vite et toutes les bibliothèques nécessaires.

```bash
npm install
```

⏱️ Cette commande va prendre **2-3 minutes**. Vous allez voir :
- Beaucoup de lignes défiler
- Un dossier `node_modules/` se créer (avec des milliers de fichiers - c'est normal !)
- Un fichier `package-lock.json` apparaître

✅ **Succès** : Si vous voyez "added XXX packages" à la fin, c'est bon !
❌ **Erreur** : Si erreur, vérifiez que le `package.json` est bien à la racine

---

### 4️⃣ Lancer le serveur de développement

```bash
npm run dev
```

🎉 **Vous devriez voir :**
```
  VITE v5.x.x  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

**Dans Codespace**, une popup devrait apparaître vous proposant d'ouvrir l'application.
Cliquez sur **"Open in Browser"** ou **"Open in Editor"**.

🌐 Votre application TechnoKit est maintenant accessible !

---

### 5️⃣ Vérifier que tout fonctionne

Dans votre navigateur, vous devriez voir :
- ✅ Le titre "🛠️ TechnoKit"
- ✅ Un dégradé violet/bleu en arrière-plan
- ✅ Les cartes "Séquences", "Compétences", "Ressources"
- ✅ Un bouton "Commencer" qui s'incrémente quand on clique

**Test rapide** : Cliquez sur le bouton "🚀 Commencer", le nombre entre parenthèses doit augmenter !

---

### 6️⃣ Arrêter le serveur

Quand vous voulez arrêter :
```bash
# Dans le terminal où tourne npm run dev
Ctrl + C

# Confirmer avec 'y' ou 'o' si demandé
```

---

### 7️⃣ Committer votre code sur GitHub

**Première fois** - Configuration Git (si pas encore fait) :
```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@example.com"
```

**Ensuite, à chaque fois que vous voulez sauvegarder** :
```bash
# 1. Vérifier les fichiers modifiés
git status

# 2. Ajouter tous les fichiers
git add .

# 3. Créer un commit avec un message
git commit -m "Initial commit - Architecture React + Vite"

# 4. Envoyer sur GitHub
git push origin main
# (ou 'git push origin master' selon votre branche principale)
```

---

## 🔄 Commandes quotidiennes

Une fois que tout est installé, voici ce que vous ferez au quotidien :

```bash
# Ouvrir votre Codespace
# 👇 Puis dans le terminal :

# Lancer l'appli
npm run dev

# Faire vos modifications dans le code
# L'appli se recharge automatiquement ! 🔥

# Quand vous avez fini
Ctrl + C

# Sauvegarder sur GitHub
git add .
git commit -m "Description de vos changements"
git push
```

---

## 🛠️ Commandes utiles

```bash
# Voir les dépendances installées
npm list --depth=0

# Nettoyer et réinstaller (si problème)
rm -rf node_modules package-lock.json
npm install

# Créer un build de production (pour Vercel)
npm run build

# Prévisualiser le build
npm run preview

# Vérifier la qualité du code
npm run lint
```

---

## 📦 Structure finale après installation

```
technokit/
├── node_modules/          # ⚠️ NE PAS MODIFIER (géré par npm)
├── public/                # Assets statiques (à créer plus tard)
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── .gitignore             # Fichiers à ignorer par Git
├── index.html
├── package.json
├── package-lock.json      # Créé automatiquement
├── vite.config.js
└── README.md
```

---

## 🎯 Prochaines étapes

Une fois que tout tourne, vous pouvez :

1. **Modifier `App.jsx`** pour personnaliser le contenu
2. **Créer un nouveau composant** dans `src/components/`
3. **Installer React Router** pour la navigation :
   ```bash
   npm install react-router-dom
   ```
4. **Déployer sur Vercel** (je peux vous guider !)

---

## ❗ Résolution des problèmes courants

### Erreur "Cannot find module 'react'"
```bash
# Réinstaller les dépendances
npm install
```

### Le port 3000 est déjà utilisé
```bash
# Modifier le port dans vite.config.js
# Changer `port: 3000` par `port: 3001`
```

### L'application ne se recharge pas automatiquement
```bash
# Arrêter le serveur (Ctrl+C) et relancer
npm run dev
```

### Erreur Git lors du push
```bash
# Pull d'abord pour récupérer les changements distants
git pull origin main
# Puis push
git push origin main
```

---

## 💡 Conseils pour bien démarrer

1. **Gardez le terminal ouvert** avec `npm run dev` pendant que vous codez
2. **Sauvegardez souvent** avec Git (au moins à chaque fin de session)
3. **Lisez les erreurs** dans la console du navigateur (F12 → Console)
4. **Hot Module Replacement** : Vite recharge automatiquement quand vous sauvegardez !
5. **Documentation** : React (react.dev) et Vite (vitejs.dev) sont vos amis

---

## 🎓 Ressources d'apprentissage

- **React** : https://react.dev/learn
- **Vite** : https://vitejs.dev/guide/
- **MDN Web Docs** : https://developer.mozilla.org/
- **freeCodeCamp** : https://www.freecodecamp.org/

---

**Bon développement ! 🚀**

Si vous rencontrez un problème, notez-le et je vous aiderai !
