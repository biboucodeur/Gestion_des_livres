# Gestion de Livres SN-BIBLIO (React + Express + MySQL)

Ce projet est une application web CRUD de gestion de livres avec authentification, développée avec :

- **Frontend** : React (Vite)
- **Backend** : Node.js + Express
- **Base de données** : MySQL
- **Test API** : Postman

## Installation

### Prérequis

- Node.js et npm
- MySQL
- Git (optionnel)
- Postman (optionnel)

### 1. Cloner le projet

```bash
git clone https://github.com/biboucodeur/gestion-des-livres.git
cd gestion-des-livres
```

### 2. Backend (Express)

```bash
cd backend
npm install
```

Créer un fichier `.env` avec les infos de la base de données :

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=gestion_des_livres
PORT=5000
JWT_SECRET=monsecret
```

Créer la base de données `gestion_des_livres` dans MySQL puis exécuter les requêtes de création des tables (users, books).

Démarrer le backend :

```bash
npm start
```

### 3. Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

L'application frontend sera accessible sur : `http://localhost:5173`

## Fonctionnalités

- Authentification : inscription, connexion, redirection selon le token.
- Ajout d’un livre
- Liste des livres (CRUD)
- Détails d’un livre
- Modification d’un livre
- Suppression d’un livre
- Design avec Tailwind CSS

## API Endpoints

### Auth

- `POST /api/auth/register` → créer un utilisateur
- `POST /api/auth/login` → se connecter

### Livres

- `GET /api/books` → liste des livres
- `GET /api/books/:id` → détail d’un livre
- `POST /api/books` → ajouter un livre
- `PUT /api/books/:id` → modifier un livre
- `DELETE /api/books/:id` → supprimer un livre

## Structure

```
/backend
  └──> config/
  └──> controllers/
  └──> middleware/
  └──> models/
  └──> node_modules/
  └──> routes/
  └── .env
  └── package-lock.json
  └── package.json
  └── server.js


/frontend
  └──> node_modules/
  └──> public/
  └──> src/
        └──> assets/
        └──> components/
        └──> pages/
        └── api.js
        └── App.jsx
        └── index.css
        └── main.jsx
  .gitignore
  eslint.config.js
  index.html
  package-lock.json
  package.json
  vite.config.js


```

## Auteur

Projet réalisé par **Abibou Wade** dans le cadre d’un projet edacy.  
Portfolio : [abibouwade.com](https://github.com/biboucodeur)

---

© 2025 - Projet Gestion des Livres
