import { useState, useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* 🌙☀️ Toggle de thème */}
      <ThemeToggle />

      {/* 🌟 Particules (lucioles en mode nuit, pollen en mode jour) */}
      <div className="fireflies">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={`firefly ${i % 3 === 0 ? 'small' : i % 3 === 1 ? 'medium' : 'large'}`}
          />
        ))}
      </div>

      <header className="App-header">
        <h1>🛠️ TechnoKit</h1>
        <p className="subtitle">Kit numérique pour prof de techno</p>
      </header>

      <main className="App-main">
        <div className="welcome-card">
          <h2>Espace pédagogique</h2>
          <p>
            TechnoKit est votre atelier numérique personnel pour organiser et structurer 
            vos cours de technologie au collège (cycle 4).
          </p>
          


          <div className="actions">
            <button className="btn-primary" onClick={() => setCount(count + 1)}>
              🚀 Commencer ({count})
            </button>
            <button className="btn-secondary">
              📚 Explorer
            </button>
          </div>
        </div>

        <div className="stats">
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Niveaux</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">9</span>
              <span className="stat-label">Compétences</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Séquences</span>
            </div>
          </div>

        <div className="info-cards">
          <div className="info-card">
            <h3>📋 Séquences</h3>
            <p>Créez et organisez vos séquences pédagogiques par niveau et thématique</p>
          </div>
          <div className="info-card">
            <h3>🎯 Compétences</h3>
            <p>Suivez la progression des compétences du cycle 4 de vos élèves</p>
          </div>
          <div className="info-card">
            <h3>📁 Ressources</h3>
            <p>Centralisez tous vos documents et ressources numériques</p>
          </div>
        </div>

        <div className="tech-stack">
          <p className="tech-label">Construit avec</p>
          <div className="tech-badges">
            <span className="badge">React</span>
            <span className="badge">Vite</span>
            <span className="badge">Vercel</span>
          </div>
        </div>
      </main>

      <footer className="App-footer">
        <p>TechnoKit - Projet personnel d'apprentissage React • 2025</p>
      </footer>
    </div>
  )
}

export default App
