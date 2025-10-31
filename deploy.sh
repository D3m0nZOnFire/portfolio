#!/bin/bash

echo "🚀 Début du déploiement..."

cd /var/www/portfolio

echo "📥 Pull des modifications..."
git pull origin main

echo "📦 Installation des dépendances..."
npm install

echo "🔨 Build de l'application..."
npm run build

echo "♻️  Redémarrage de PM2..."
pm2 reload ecosystem.config.js

echo "✅ Déploiement terminé!"
pm2 status portfolio