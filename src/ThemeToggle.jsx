import { useState, useEffect } from 'react'
import './ThemeToggle.css'

function ThemeToggle() {
  const [theme, setTheme] = useState('dark')

  // Charger le thème sauvegardé au montage
  useEffect(() => {
    const savedTheme = localStorage.getItem('technokit-theme') || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme === 'light' ? 'light' : 'dark')
  }, [])

  // Basculer entre les thèmes
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme === 'light' ? 'light' : 'dark')
    localStorage.setItem('technokit-theme', newTheme)
  }

  return (
    <button 
      className={`theme-toggle ${theme}`}
      onClick={toggleTheme}
      aria-label="Changer de thème"
      title={theme === 'dark' ? 'Passer en mode jour' : 'Passer en mode nuit'}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {theme === 'dark' ? (
            <svg className="icon moon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          ) : (
            <svg className="icon sun" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          )}
        </div>
      </div>
      <span className="toggle-label">
        {theme === 'dark' ? '🌙 Nuit' : '☀️ Jour'}
      </span>
    </button>
  )
}

export default ThemeToggle
