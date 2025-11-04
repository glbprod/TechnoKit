// Test rapide de l'API
import { testConnection } from './services/claudeApi.js';

console.log('🧪 Test de connexion à Claude...');

testConnection()
  .then((success) => {
    if (success) {
      console.log('✅ SUCCÈS ! L\'API fonctionne !');
    } else {
      console.log('❌ ÉCHEC ! Vérifiez votre clé API dans .env');
    }
  })
  .catch((error) => {
    console.error('❌ Erreur:', error.message);
  });