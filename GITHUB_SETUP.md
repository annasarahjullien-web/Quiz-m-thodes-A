# 🚀 Guide Complet: Déployer votre Quiz sur GitHub Pages

## Option 1: RAPIDE (5 minutes) ⚡

### Étape 1: Créer un compte GitHub
- Allez sur [github.com](https://github.com)
- Cliquez sur "Sign up"
- Remplissez vos infos

### Étape 2: Créer un nouveau repository
1. Cliquez sur l'icône **+** (coin haut droit)
2. Sélectionnez **New repository**
3. Nom du repo: `quiz-secteur-a`
4. Cochez **Public**
5. Cochez **Add a README file** (optionnel)
6. Cliquez **Create repository**

### Étape 3: Uploader vos fichiers
1. Dans votre repo, cliquez **Add file** → **Upload files**
2. Glissez-déposez vos fichiers:
   - `index.html`
   - `quiz-secteur-a.jsx` (optionnel)
   - `README.md`
   - `LICENSE`
   - `.gitignore`
   - `package.json`
3. Cliquez **Commit changes**

### Étape 4: Activer GitHub Pages
1. Allez dans **Settings** (onglet du repo)
2. Scroll jusqu'à **Pages** (menu de gauche)
3. Sous "Source", sélectionnez **main** (ou **master**)
4. Cliquez **Save**
5. Attendez ~1 minute

### ✅ C'est prêt!
Votre quiz est accessible à:
```
https://votre-username.github.io/quiz-secteur-a
```

---

## Option 2: AVANCÉ (avec Git) 10 minutes

### Prérequis
- [Git installé](https://git-scm.com/downloads)
- Compte GitHub

### Étape 1: Créer le repo sur GitHub
Même que Option 1, étapes 2

### Étape 2: Cloner sur votre ordinateur
```bash
git clone https://github.com/votre-username/quiz-secteur-a.git
cd quiz-secteur-a
```

### Étape 3: Copier vos fichiers
Mettez les fichiers (index.html, etc.) dans le dossier

### Étape 4: Committer et pousser
```bash
git add .
git commit -m "Initial commit: Quiz Secteur A SVTU"
git push origin main
```

### Étape 5: Activer GitHub Pages
Même que Option 1, étape 4

---

## Option 3: ENCORE PLUS RAPIDE avec GitHub Desktop 🎯

### Pour Windows/Mac

1. **Téléchargez** [GitHub Desktop](https://desktop.github.com)

2. **Créez un repo local**:
   - File → New Repository
   - Nom: `quiz-secteur-a`
   - Description: "Quiz interactif Secteur A SVTU"
   - Créez le dossier

3. **Mettez vos fichiers** dans le dossier créé

4. **Committez sur GitHub**:
   - Ouvrez le repo dans GitHub Desktop
   - Écrivez le message: "Initial commit"
   - Cliquez "Commit to main"
   - Cliquez "Push origin"

5. **Publiez**:
   - Cliquez "Publish repository"
   - Sélectionnez "Public"
   - OK!

6. **Activez Pages** dans les Settings du repo

---

## Vérification: Ça marche? ✅

1. Allez sur: `https://votre-username.github.io/quiz-secteur-a`
2. Vous devriez voir le quiz!
3. Testez quelques questions

---

## Dépannage 🔧

### La page affiche "404"
- Attendez 2-3 minutes (le déploiement prend du temps)
- Vérifiez que Pages est activé dans Settings
- Assurez-vous que `index.html` est bien uploadé

### Le quiz s'affiche mais les styles ne sont pas là
- Vérifiez la console (F12 → Console)
- Les CDN (React, etc.) peuvent être bloqués - réessayez

### Mes changements ne s'affichent pas
- Attendez 1-2 minutes
- Rafraîchissez (Ctrl+F5 ou Cmd+Shift+R)
- Videz le cache du navigateur

---

## Améliorations après le déploiement 📝

### Modifier une question
1. Éditez `index.html` directement sur GitHub
2. Cliquez sur le crayon (Edit)
3. Modifiez
4. Cliquez "Commit changes"
5. Attendez ~30s

### Ajouter des questions
Modifiez le tableau `quizData` dans `index.html`:

```javascript
{
    id: 13,
    type: 'choice',
    question: 'Votre nouvelle question',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    correct: 1,  // Index de la bonne réponse (0-3)
    explanation: 'Explication détaillée...',
    emoji: '🔬'
}
```

### Partager votre quiz
- URL: `https://votre-username.github.io/quiz-secteur-a`
- QR Code: Utilisez [qr-server.com](https://qr-server.com) pour générer un code

---

## Statistiques GitHub 📊

Votre repo affichera:
- Nombre de commits
- Contributeurs
- Historique des modifications

C'est bon pour votre portfolio!

---

## Prochaines étapes 🚀

### Optionnel: Site plus avancé
- Ajouter plus de questions (50+)
- Créer une page "À propos" 
- Ajouter des statistiques de score
- Mode "Apprentissage" vs "Examen"

### Communauté
- Demandez aux autres étudiants de contribuer
- Mettez en avant sur Discord, Slack, etc.
- Créez un système de contributeurs

---

## Support

**Problème non résolu?**
1. Vérifiez le [Guide GitHub Pages officiel](https://docs.github.com/en/pages)
2. Créez une issue sur votre repo
3. Posez la question sur Stack Overflow (tag: `github-pages`)

---

**Félicitations! Votre quiz est maintenant en ligne! 🎉**
