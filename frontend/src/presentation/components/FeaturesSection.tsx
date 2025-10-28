import React from 'react'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Calculadoras Avançadas',
      description: 'Ferramentas de cálculo para experiência, dano, resistências e muito mais.',
      icon: '🧮'
    },
    {
      title: 'Consultas em Tempo Real',
      description: 'Dados atualizados diretamente das APIs oficiais da CipSoft.',
      icon: '📊'
    },
    {
      title: 'Análise de Personagens',
      description: 'Estatísticas detalhadas e comparações entre personagens.',
      icon: '⚔️'
    },
    {
      title: 'Marketplace Integration',
      description: 'Preços atualizados do marketplace e análise de tendências.',
      icon: '💰'
    },
    {
      title: 'Guild Management',
      description: 'Ferramentas para gerenciamento e análise de guilds.',
      icon: '🏰'
    },
    {
      title: 'World Events',
      description: 'Acompanhamento de eventos mundiais e bosses.',
      icon: '🌍'
    }
  ]

  return (
    <section id="ferramentas" style={{ padding: '4rem 0', backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          marginBottom: '3rem',
          fontSize: '2.5rem',
          color: '#333'
        }}>
          Ferramentas Planejadas
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {feature.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                color: '#333'
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                color: '#666',
                lineHeight: '1.6'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
