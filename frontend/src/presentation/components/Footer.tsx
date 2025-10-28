import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      backgroundColor: '#1a1a1a', 
      color: 'white', 
      padding: '2rem 0',
      textAlign: 'center'
    }}>
      <div className="container">
        <p style={{ marginBottom: '1rem' }}>
          © 2025 tibiaHelp - Plataforma de ferramentas para jogadores de Tibia
        </p>
        <p style={{ fontSize: '0.9rem', color: '#ccc' }}>
          Desenvolvido com React, TypeScript e Clean Architecture
        </p>
      </div>
    </footer>
  )
}

export default Footer
