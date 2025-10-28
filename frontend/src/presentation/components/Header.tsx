import React from 'react'

const Header: React.FC = () => {
  return (
    <header style={{ 
      backgroundColor: '#1a1a1a', 
      color: 'white', 
      padding: '1rem 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
            tibiaHelp
          </h1>
          <nav>
            <ul style={{ 
              display: 'flex', 
              listStyle: 'none', 
              gap: '2rem',
              margin: 0,
              padding: 0
            }}>
              <li><a href="#inicio" style={{ color: 'white', textDecoration: 'none' }}>Início</a></li>
              <li><a href="#ferramentas" style={{ color: 'white', textDecoration: 'none' }}>Ferramentas</a></li>
              <li><a href="#sobre" style={{ color: 'white', textDecoration: 'none' }}>Sobre</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
