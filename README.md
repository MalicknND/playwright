# 🚀 Mon Projet Test - Next.js + Playwright

> Projet d'apprentissage pour maîtriser l'automatisation de tests avec Playwright sur une application Next.js

## 📋 Table des matières

- [À propos](#-à-propos)
- [Technologies utilisées](#-technologies-utilisées)
- [Installation](#-installation)
- [Structure du projet](#-structure-du-projet)
- [Lancer l'application](#-lancer-lapplication)
- [Tests automatisés](#-tests-automatisés)
- [Fonctionnalités testées](#-fonctionnalités-testées)
- [Scripts disponibles](#-scripts-disponibles)
- [Bonnes pratiques](#-bonnes-pratiques)
- [CI/CD](#-cicd)
- [Ressources utiles](#-ressources-utiles)

## 🎯 À propos

Ce projet est une application Next.js simple créée pour apprendre et pratiquer l'automatisation de tests avec Playwright. Il simule un site d'assurance avec :

- 🏠 **Page d'accueil** : Navigation principale
- 📞 **Page contact** : Formulaire avec validation
- 🛡️ **Page produits** : Catalogue d'assurances

**Objectif pédagogique** : Comprendre les bases des tests end-to-end (E2E) pour un entretien technique.

## 🛠 Technologies utilisées

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire

### Tests
- **Playwright** - Framework de tests E2E
- **@playwright/test** - Runner de tests intégré

### Outils de développement
- **ESLint** - Linter JavaScript/TypeScript
- **PostCSS** - Traitement CSS

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes d'installation

1. **Cloner ou créer le projet**
```bash
npx create-next-app@latest mon-projet-test --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd mon-projet-test
```

2. **Installer Playwright**
```bash
npm install -D @playwright/test
npx playwright install
```

3. **Installer les dépendances**
```bash
npm install
```

4. **Créer la structure des tests**
```bash
mkdir tests
```

## 📁 Structure du projet

```
projet-test/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.tsx              # Page d'accueil
│       ├── contact/
│       │   └── page.tsx          # Formulaire de contact
│       └── products/
│           └── page.tsx          # Catalogue produits
├── tests/
│   ├── homepage.spec.ts          # Tests navigation accueil (6 tests)
│   ├── contact.spec.ts           # Tests formulaire contact (9 tests)
│   ├── products.spec.ts          # Tests page produits (6 tests)
│   └── e2e-flow.spec.ts          # Tests parcours complets (3 tests)
├── .github/
│   └── workflows/
│       └── playwright.yml        # Pipeline CI/CD GitHub Actions
├── playwright.config.ts          # Configuration Playwright
├── Dockerfile                    # Containerisation pour tests
├── package.json
└── README.md
```

**📊 Couverture de tests : 24 tests sur 3 navigateurs (Chrome, Firefox, Safari)**

## 🏃‍♂️ Lancer l'application

### Mode développement
```bash
npm run dev
```
Application accessible sur [http://localhost:3000](http://localhost:3000)

### Mode production
```bash
npm run build
npm run start
```

## 🧪 Tests automatisés

### Lancer tous les tests
```bash
npm run test:e2e
```

### Interface graphique des tests
```bash
npm run test:e2e:ui
```

### Tests en mode debug
```bash
npx playwright test --debug
```

### Lancer un test spécifique
```bash
npx playwright test contact.spec.ts
```

### Voir le rapport des tests
```bash
npm run test:e2e:report
```

### Tests par navigateur
```bash
# Chrome uniquement
npx playwright test --project=chromium

# Firefox uniquement
npx playwright test --project=firefox

# Safari uniquement
npx playwright test --project=webkit
```

## ✅ Fonctionnalités testées

### 🏠 Page d'accueil (`homepage.spec.ts`)
- [x] Chargement correct du titre principal
- [x] Présence des liens de navigation
- [x] Navigation vers les sous-pages

### 📞 Formulaire de contact (`contact.spec.ts`)
- [x] Affichage des champs de formulaire
- [x] Validation des champs obligatoires
- [x] Soumission réussie du formulaire
- [x] Affichage du message de confirmation

### 🛡️ Page produits (`products.spec.ts`)
- [x] Affichage de tous les produits d'assurance
- [x] Présence des boutons d'action
- [x] Interaction avec les boutons de souscription

### 🔄 Parcours utilisateur (`e2e-flow.spec.ts`)
- [x] Navigation complète entre toutes les pages
- [x] Processus complet de contact (navigation → formulaire → confirmation)
- [x] Simulation d'un parcours utilisateur réaliste

## 📜 Scripts disponibles

| Script | Commande | Description |
|--------|----------|-------------|
| **Dev** | `npm run dev` | Lance l'app en développement |
| **Build** | `npm run build` | Build de production |
| **Start** | `npm run start` | Lance l'app en production |
| **Lint** | `npm run lint` | Vérifie la qualité du code |
| **Tests E2E** | `npm run test:e2e` | Lance tous les tests Playwright |
| **Tests UI** | `npm run test:e2e:ui` | Interface graphique des tests |
| **Rapport** | `npm run test:e2e:report` | Ouvre le rapport HTML des tests |

## 💡 Bonnes pratiques implémentées

### 🎯 Sélecteurs de tests
```typescript
// ✅ Utilisation de data-testid pour la stabilité
await page.getByTestId('submit-button').click();

// ✅ Sélecteurs sémantiques quand possible
await page.getByRole('button', { name: 'Envoyer' }).click();
```

### 🔍 Assertions robustes
```typescript
// ✅ Vérifications explicites
await expect(page.getByTestId('success-message')).toBeVisible();
await expect(page.getByTestId('main-title')).toHaveText('Mon App de Test');
```

### ⏳ Gestion de l'attente
```typescript
// ✅ Attentes automatiques avec Playwright
await expect(page.getByTestId('loading')).not.toBeVisible();
```

### 📊 Organisation des tests
- **Tests unitaires par page** : Un fichier par fonctionnalité
- **Tests de parcours** : Scénarios utilisateur complets
- **Nommage explicite** : `*.spec.ts` pour tous les tests

## 🔄 CI/CD

### ✅ Configuration GitHub Actions **IMPLÉMENTÉE**

Le pipeline CI/CD est maintenant **actif** et configuré dans `.github/workflows/playwright.yml` :

```yaml
name: Playwright Tests
on:
  push:
    branches: [main, master]
  pull_request:
    branches: [main, master]

jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: 18
        cache: "npm"
        
    - name: Install dependencies
      run: npm ci
      
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
      
    - name: Build Next.js app
      run: npm run build
      
    - name: Run Playwright tests
      run: npm run test:e2e
      
    - name: Upload test results
      uses: actions/upload-artifact@v4
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
        
    - name: Upload test results (on failure)
      uses: actions/upload-artifact@v4
      if: failure()
      with:
        name: test-results
        path: test-results/
        retention-days: 30
```

**🚀 Pipeline actif avec :**
- Tests automatiques sur push/PR
- Build Next.js automatisé
- Cache npm pour optimiser les builds
- Rapports de test conservés 30 jours
- Gestion des échecs avec artefacts de debug

### Configuration pour Docker

Créer `Dockerfile` :

```dockerfile
FROM mcr.microsoft.com/playwright:v1.40.0-focal

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

CMD ["npm", "run", "test:e2e"]
```

## 🎓 Concepts clés pour entretien

### Terminologie importante
- **E2E (End-to-End)** : Tests qui simulent le comportement utilisateur complet
- **Sélecteurs** : Méthodes pour cibler les éléments (testid, rôle, texte)
- **Assertions** : Vérifications des résultats attendus
- **CI/CD** : Intégration et déploiement continus
- **Pipeline** : Séquence automatisée de build, test et déploiement
- **Page Object Model** : Pattern pour organiser les tests (non implémenté ici mais à connaître)

### Points forts de ce projet
- ✅ Tests réalistes sur une app métier (assurance)
- ✅ Couverture complète : navigation, formulaires, interactions
- ✅ Configuration multi-navigateurs (Chrome, Firefox, Safari)
- ✅ Rapports visuels avec screenshots et traces
- ✅ Intégration Next.js + TypeScript
- ✅ **CI/CD GitHub Actions implémenté et actif**
- ✅ **24 tests automatisés** sur 3 navigateurs
- ✅ **Pipeline de build et test** automatisé

### Améliorations possibles
- 🔄 Ajout de tests de performance
- 🔄 Tests d'accessibilité
- 🔄 Tests sur mobile
- 🔄 Gestion des données de test
- 🔄 Page Object Model pour les gros projets

## 🔗 Ressources utiles

### Documentation officielle
- [Playwright Documentation](https://playwright.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### Guides et tutoriels
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Next.js Testing Guide](https://nextjs.org/docs/testing)
- [CI/CD with Playwright](https://playwright.dev/docs/ci)

### Outils complémentaires
- [Playwright VS Code Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
- [Playwright Inspector](https://playwright.dev/docs/inspector)

## 🤝 Contribution

Ce projet est à des fins d'apprentissage. N'hésite pas à :
- Ajouter de nouveaux tests
- Améliorer les scénarios existants  
- Optimiser la configuration
- Ajouter de nouvelles fonctionnalités à tester

## 📝 Notes personnelles

### Points à retenir pour l'entretien :
1. **Stratégie de test** : Pourquoi ces tests ? Quelle valeur ajoutée ?
2. **Maintenance** : Comment garder les tests robustes ?
3. **CI/CD** : Comment intégrer dans une pipeline ?
4. **Performance** : Comment optimiser l'exécution des tests ?

### Questions potentielles à préparer :
- Comment gères-tu les tests flaky (instables) ?
- Quelle est ta stratégie pour les données de test ?
- Comment testes-tu les éléments dynamiques ?
- Comment organises-tu les tests dans un gros projet ?
- **Comment as-tu configuré le CI/CD ?**
- **Quels sont les avantages de l'automatisation des tests ?**
- **Comment gères-tu les échecs de build en CI ?**

---

💡 **Conseil** : Lance tous les tests, explore l'interface graphique, et assure-toi de comprendre chaque ligne de code avant ton entretien !

🎯 **Objectif atteint** : Tu as maintenant une base solide pour parler d'automatisation de tests avec Playwright ET de CI/CD ! 🚀

## 🚀 **Statut du projet : PRODUCTION READY**

- ✅ **Application Next.js** fonctionnelle
- ✅ **24 tests E2E** automatisés sur 3 navigateurs
- ✅ **Pipeline CI/CD** GitHub Actions actif
- ✅ **Containerisation Docker** pour les tests
- ✅ **Documentation complète** et à jour

**🎉 Félicitations ! Votre projet est maintenant prêt pour la production avec un pipeline CI/CD professionnel !**