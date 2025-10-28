# tibiaHelp API Backend

## 📋 Sobre o Projeto

O **tibiaHelp API** é o backend da plataforma tibiaHelp, desenvolvido para fornecer ferramentas de cálculo, consultas de dados e integração com APIs externas da CipSoft. A API é construída com Node.js, Express e TypeScript, seguindo os princípios de Clean Architecture, DDD e TDD.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Linguagem de programação tipada
- **Jest** - Framework de testes
- **Axios** - Cliente HTTP para APIs externas
- **CORS** - Middleware para Cross-Origin Resource Sharing

## 🏗️ Arquitetura

O projeto segue os princípios de **Clean Architecture** com as seguintes camadas:

- **Application** - Casos de uso da aplicação
- **Domain** - Regras de negócio e entidades
- **Infrastructure** - Implementações externas (HTTP, APIs, banco de dados)
- **Shared** - Código compartilhado entre camadas

Para mais detalhes sobre a arquitetura, consulte o arquivo [architecture.md](./docs/architecture.md).

## 📁 Estrutura do Projeto

```
src/
├── application/          # Casos de uso
│   └── usecases/
├── domain/              # Entidades e regras de negócio
│   ├── entities/
│   ├── repositories/
│   └── services/
├── infrastructure/      # Implementações externas
│   ├── http/           # Express setup
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── controllers/
│   ├── external/       # APIs externas
│   └── database/       # Preparado para futuro DB
├── shared/             # Código compartilhado
│   ├── types/
│   ├── errors/
│   └── utils/
└── server.ts           # Entry point
```

## 🛠️ Pré-requisitos

- Node.js 18 ou superior
- npm ou yarn
- Git

## 📦 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Mallfurion15/tibiaHelp-api.git
   cd tibiaHelp-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente:**
   ```bash
   cp env.example .env
   ```

4. **Execute o servidor em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Teste a API:**
   ```bash
   curl http://localhost:3001/health
   ```

## 🧪 Testes

### Executar todos os testes:
```bash
npm test
```

### Executar testes em modo watch:
```bash
npm run test:watch
```

### Executar testes com cobertura:
```bash
npm run test:coverage
```

## 🏗️ Build de Produção

```bash
npm run build
npm start
```

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Cria o build de produção |
| `npm run start` | Executa o build de produção |
| `npm run test` | Executa os testes |
| `npm run test:watch` | Executa testes em modo watch |
| `npm run test:coverage` | Executa testes com relatório de cobertura |
| `npm run lint` | Executa o linter |
| `npm run lint:fix` | Corrige problemas de linting automaticamente |

## 🌐 Endpoints da API

### Health Check
- `GET /health` - Status da API

### API Info
- `GET /api` - Informações da API

### Endpoints Planejados

#### Player Endpoints
- `GET /api/players/:name` - Informações do personagem
- `GET /api/players/:name/online` - Status online
- `GET /api/players/:name/deaths` - Histórico de mortes

#### Guild Endpoints
- `GET /api/guilds/:name` - Informações da guild
- `GET /api/guilds/:name/members` - Membros da guild
- `GET /api/guilds/:name/wars` - Guerras da guild

#### Calculator Endpoints
- `POST /api/calculators/experience` - Cálculo de experiência
- `POST /api/calculators/damage` - Cálculo de dano
- `POST /api/calculators/resistance` - Cálculo de resistências

#### World Endpoints
- `GET /api/worlds` - Lista de mundos
- `GET /api/worlds/:name/events` - Eventos do mundo
- `GET /api/worlds/:name/bosses` - Bosses do mundo

## ⚙️ Configuração de Ambiente

### Variáveis de Ambiente

Crie um arquivo `.env` baseado no `env.example`:

```env
# Configuração do Servidor
NODE_ENV=development
PORT=3001

# APIs Externas
CIPSOFT_API_BASE_URL=https://api.tibiadata.com/v4
CIPSOFT_API_TIMEOUT=5000

# Database (Futuro)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tibiahelp
DB_USER=tibiahelp
DB_PASSWORD=password

# Autenticação (Futuro)
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🔧 Configuração do Ambiente de Desenvolvimento

### VS Code (Recomendado)

Instale as seguintes extensões:
- **Node.js Extension Pack**
- **TypeScript Importer**
- **REST Client**
- **Thunder Client**
- **Prettier - Code formatter**
- **ESLint**

### Configurações Recomendadas

Crie um arquivo `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative"
}
```

## 📝 Convenções de Código

### Nomenclatura
- **Classes**: PascalCase (`PlayerController.ts`)
- **Interfaces**: PascalCase com prefixo `I` (`IPlayerRepository.ts`)
- **Funções**: camelCase (`getPlayerInfo`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Arquivos**: PascalCase para classes, camelCase para funções

### Estrutura de Arquivos
- Um arquivo por classe/entidade
- Interfaces em arquivos separados
- Testes co-localizados com o código

### Imports
- Imports absolutos usando aliases (`@domain/entities/Player`)
- Ordem: bibliotecas externas → internas → relativos

## 🎯 Features Planejadas

### Fase 1 - MVP
- [x] Estrutura base da API
- [x] Health check endpoint
- [ ] Integração básica com TibiaData
- [ ] Endpoint de consulta de personagem

### Fase 2 - Ferramentas Básicas
- [ ] Calculadora de experiência
- [ ] Calculadora de dano
- [ ] Calculadora de resistências
- [ ] Consulta de guild

### Fase 3 - Integração Avançada
- [ ] Cache inteligente
- [ ] Rate limiting
- [ ] Logs estruturados
- [ ] Métricas de performance

### Fase 4 - Features Avançadas
- [ ] Database integration
- [ ] Autenticação JWT
- [ ] WebSocket para dados em tempo real
- [ ] Sistema de notificações

## 🔒 Segurança

### Validação de Dados
- Validação de entrada em todos os endpoints
- Sanitização de dados
- TypeScript para type safety

### Rate Limiting
- Limitação de requisições por IP
- Diferentes limites para diferentes endpoints
- Headers informativos sobre limites

### CORS
- Configuração adequada de CORS
- Validação de origens permitidas
- Headers de segurança

### Error Handling
- Não exposição de informações sensíveis
- Logs estruturados de erros
- Respostas padronizadas de erro

## 📊 Monitoramento

### Logging
- Logs estruturados
- Diferentes níveis de log (error, warn, info, debug)
- Rotação de logs

### Métricas
- Métricas de performance
- Contadores de requisições
- Tempo de resposta por endpoint

### Health Checks
- Endpoint de health check
- Verificação de dependências externas
- Status detalhado da aplicação

## 🐛 Troubleshooting

### Problemas Comuns

1. **Erro de dependências:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Erro de TypeScript:**
   ```bash
   npm run build
   ```

3. **Porta já em uso:**
   ```bash
   # Altere a porta no arquivo .env
   PORT=3002
   ```

4. **Erro de CORS:**
   ```bash
   # Verifique a configuração de CORS no código
   ```

## 🧪 Testando a API

### Usando curl

```bash
# Health check
curl http://localhost:3001/health

# API info
curl http://localhost:3001/api
```

### Usando Thunder Client (VS Code)

1. Instale a extensão Thunder Client
2. Crie uma nova requisição
3. Teste os endpoints disponíveis

### Usando Postman

1. Importe a collection da API
2. Configure o ambiente com a URL base
3. Execute os testes

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Padrões de Commit

Use o formato: `tipo(escopo): descrição`

Exemplos:
- `feat(player): adiciona endpoint de consulta de personagem`
- `fix(api): corrige erro de timeout`
- `docs(readme): atualiza instruções de instalação`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/Mallfurion15/tibiaHelp-api/issues)
- **Discord**: [Servidor do tibiaHelp](https://discord.gg/tibiahelp)
- **Email**: contato@tibiahelp.com

## 🙏 Agradecimentos

- Comunidade Tibia por feedback e sugestões
- Desenvolvedores da TibiaData API
- Contribuidores do projeto

---

**Desenvolvido com ❤️ para a comunidade Tibia**
