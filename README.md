# tibiaHelp

## 📋 Sobre o Projeto

O **tibiaHelp** é uma plataforma completa desenvolvida para fornecer ferramentas e informações em tempo real para jogadores de Tibia. O projeto é composto por um frontend em React e um backend em Node.js, ambos seguindo os princípios de Clean Architecture, DDD e TDD.

## 🏗️ Estrutura do Projeto

```
tibiaHelp/
├── frontend/          # Aplicação React (Frontend)
├── backend/           # API Node.js (Backend)
├── .gitignore         # Arquivos ignorados pelo Git
└── README.md          # Este arquivo
```

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca para interface de usuário
- **TypeScript** - Linguagem de programação tipada
- **Vite** - Build tool e servidor de desenvolvimento
- **Jest** - Framework de testes
- **Axios** - Cliente HTTP para comunicação com APIs

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Linguagem de programação tipada
- **Jest** - Framework de testes
- **Axios** - Cliente HTTP para APIs externas
- **CORS** - Middleware para Cross-Origin Resource Sharing

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 18 ou superior
- npm ou yarn
- Git

### 1. Clone o repositório
```bash
git clone https://github.com/Mallfurion15/tibiaHelp.git
cd tibiaHelp
```

### 2. Instale as dependências

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd backend
npm install
```

### 3. Execute os projetos

**Frontend (em um terminal):**
```bash
cd frontend
npm run dev
```
Acesse: [http://localhost:5173](http://localhost:5173)

**Backend (em outro terminal):**
```bash
cd backend
npm run dev
```
API disponível em: [http://localhost:3001](http://localhost:3001)

## 🧪 Testes

### Frontend
```bash
cd frontend
npm test
```

### Backend
```bash
cd backend
npm test
```

## 🎯 Features Planejadas

### Fase 1 - MVP
- [x] Estrutura base do projeto
- [x] Landing page responsiva
- [x] API básica com health check
- [ ] Calculadora de experiência básica
- [ ] Consulta de personagem

### Fase 2 - Ferramentas Básicas
- [ ] Calculadora de dano
- [ ] Calculadora de resistências
- [ ] Análise de equipamentos
- [ ] Comparador de personagens

### Fase 3 - Integração Avançada
- [ ] Integração com API TibiaData
- [ ] Dados em tempo real
- [ ] Sistema de notificações
- [ ] Histórico de personagens

### Fase 4 - Features Avançadas
- [ ] Marketplace integration
- [ ] Guild management
- [ ] World events tracking
- [ ] Mobile app (React Native)

## 🏗️ Arquitetura

O projeto segue os princípios de **Clean Architecture** com separação clara de responsabilidades:

- **Presentation Layer** - Interface de usuário (Frontend)
- **Application Layer** - Casos de uso da aplicação
- **Domain Layer** - Regras de negócio e entidades
- **Infrastructure Layer** - Implementações externas (APIs, banco de dados)

Para mais detalhes sobre a arquitetura, consulte:
- [Frontend Architecture](./frontend/docs/architecture.md)
- [Backend Architecture](./backend/docs/architecture.md)

## 📝 Convenções de Código

### Nomenclatura
- **Componentes**: PascalCase (`PlayerCard.tsx`)
- **Classes**: PascalCase (`PlayerController.ts`)
- **Interfaces**: PascalCase com prefixo `I` (`IPlayerRepository.ts`)
- **Funções**: camelCase (`getPlayerInfo`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### Padrões de Commit
Use o formato: `tipo(escopo): descrição`

Exemplos:
- `feat(calculator): adiciona calculadora de experiência`
- `fix(api): corrige erro de timeout`
- `docs(readme): atualiza instruções de instalação`

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/Mallfurion15/tibiaHelp/issues)
- **Discord**: [Servidor do tibiaHelp](https://discord.gg/tibiahelp)
- **Email**: contato@tibiahelp.com

## 🙏 Agradecimentos

- Comunidade Tibia por feedback e sugestões
- Desenvolvedores da TibiaData API
- Contribuidores do projeto

---

**Desenvolvido com ❤️ para a comunidade Tibia**

## 🔗 Links Úteis

- [Repositório Frontend](./frontend/)
- [Repositório Backend](./backend/)
- [Documentação da Arquitetura](./frontend/docs/architecture.md)
- [API Documentation](./backend/docs/architecture.md)
