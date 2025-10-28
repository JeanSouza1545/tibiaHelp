# Arquitetura do tibiaHelp Backend API

## Visão Geral

O backend do tibiaHelp é uma API REST desenvolvida seguindo os princípios de **Clean Architecture**, **Domain-Driven Design (DDD)** e **Test-Driven Development (TDD)**. A API fornece endpoints para ferramentas de cálculo, consultas de dados e integração com APIs externas da CipSoft.

## Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Linguagem de programação tipada
- **Jest** - Framework de testes
- **Axios** - Cliente HTTP para APIs externas
- **CORS** - Middleware para Cross-Origin Resource Sharing

## Arquitetura Clean Architecture

### Camadas da Aplicação

```
src/
├── application/      # Camada de Aplicação (Casos de Uso)
├── domain/         # Camada de Domínio (Regras de Negócio)
├── infrastructure/ # Camada de Infraestrutura (Implementações Externas)
└── shared/        # Código Compartilhado
```

### Responsabilidades das Camadas

#### 1. Domain Layer (`src/domain/`)
- **Entidades**: Objetos de negócio com identidade única
- **Repositórios**: Interfaces que definem contratos para acesso a dados
- **Serviços**: Lógica de domínio complexa
- **Value Objects**: Objetos sem identidade, apenas valores

#### 2. Application Layer (`src/application/`)
- **Casos de Uso**: Orquestração de operações entre camadas
- **DTOs**: Objetos de transferência de dados
- **Serviços de Aplicação**: Lógica de aplicação específica

#### 3. Infrastructure Layer (`src/infrastructure/`)
- **HTTP**: Configuração do Express e rotas
- **External**: Integração com APIs externas (CipSoft, TibiaData)
- **Database**: Implementações de repositórios (preparado para futuro)

#### 4. Shared Layer (`src/shared/`)
- **Tipos**: Interfaces e tipos TypeScript compartilhados
- **Erros**: Classes de erro customizadas
- **Utilitários**: Funções auxiliares

## Princípios DDD Aplicados

### 1. Bounded Contexts
- **Player Context**: Operações relacionadas a personagens
- **Guild Context**: Operações relacionadas a guilds
- **Marketplace Context**: Dados de mercado e preços
- **World Context**: Informações mundiais e eventos
- **Calculator Context**: Ferramentas de cálculo

### 2. Aggregates
- **Player**: Personagem com estatísticas e informações
- **Guild**: Guild com membros e informações
- **Item**: Item com propriedades e preços
- **World**: Mundo com eventos e informações

### 3. Value Objects
- **Experience**: Valor de experiência com validações
- **Level**: Nível com cálculos específicos
- **Coordinates**: Coordenadas do mundo
- **Damage**: Dano com tipos e resistências

## Estrutura de Pastas Detalhada

```
src/
├── application/
│   └── usecases/          # Casos de uso da aplicação
│       ├── GetPlayerInfo.ts
│       ├── CalculateExperience.ts
│       └── GetGuildMembers.ts
├── domain/
│   ├── entities/          # Entidades de domínio
│   │   ├── Player.ts
│   │   ├── Guild.ts
│   │   ├── Item.ts
│   │   └── World.ts
│   ├── repositories/      # Interfaces de repositórios
│   │   ├── IPlayerRepository.ts
│   │   ├── IGuildRepository.ts
│   │   └── IItemRepository.ts
│   └── services/         # Serviços de domínio
│       ├── ExperienceCalculator.ts
│       ├── DamageCalculator.ts
│       └── ResistanceCalculator.ts
├── infrastructure/
│   ├── http/            # Configuração HTTP
│   │   ├── routes/      # Definição de rotas
│   │   │   ├── playerRoutes.ts
│   │   │   ├── guildRoutes.ts
│   │   │   └── calculatorRoutes.ts
│   │   ├── middlewares/ # Middlewares customizados
│   │   │   ├── errorHandler.ts
│   │   │   ├── requestLogger.ts
│   │   │   └── rateLimiter.ts
│   │   └── controllers/ # Controladores
│   │       ├── PlayerController.ts
│   │       ├── GuildController.ts
│   │       └── CalculatorController.ts
│   ├── external/         # APIs externas
│   │   ├── TibiaDataClient.ts
│   │   ├── CipSoftClient.ts
│   │   └── WorldDataClient.ts
│   └── database/        # Preparado para futuro DB
│       ├── repositories/ # Implementações de repositórios
│       └── models/      # Models de banco de dados
├── shared/
│   ├── types/           # Tipos compartilhados
│   │   ├── ApiResponse.ts
│   │   ├── PlayerTypes.ts
│   │   └── CommonTypes.ts
│   ├── errors/          # Classes de erro
│   │   ├── DomainError.ts
│   │   ├── ValidationError.ts
│   │   └── ExternalApiError.ts
│   └── utils/           # Utilitários
│       ├── formatters.ts
│       ├── validators.ts
│       └── constants.ts
└── server.ts            # Entry point da aplicação
```

## Fluxo de Dados

```
HTTP Request → Middleware → Controller → UseCase → Domain Service → Repository → External API
```

1. **Requisição HTTP** chega ao servidor
2. **Middlewares** processam (CORS, logging, validação)
3. **Controller** recebe e valida a requisição
4. **UseCase** orquestra a operação
5. **Domain Service** aplica regras de negócio
6. **Repository** busca dados externos
7. **Resposta** retorna pelas mesmas camadas

## Endpoints da API

### 1. Health Check
- `GET /health` - Status da API

### 2. Player Endpoints (Planejados)
- `GET /api/players/:name` - Informações do personagem
- `GET /api/players/:name/online` - Status online
- `GET /api/players/:name/deaths` - Histórico de mortes

### 3. Guild Endpoints (Planejados)
- `GET /api/guilds/:name` - Informações da guild
- `GET /api/guilds/:name/members` - Membros da guild
- `GET /api/guilds/:name/wars` - Guerras da guild

### 4. Calculator Endpoints (Planejados)
- `POST /api/calculators/experience` - Cálculo de experiência
- `POST /api/calculators/damage` - Cálculo de dano
- `POST /api/calculators/resistance` - Cálculo de resistências

### 5. World Endpoints (Planejados)
- `GET /api/worlds` - Lista de mundos
- `GET /api/worlds/:name/events` - Eventos do mundo
- `GET /api/worlds/:name/bosses` - Bosses do mundo

## Convenções de Código

### 1. Nomenclatura
- **Classes**: PascalCase (`PlayerController.ts`)
- **Interfaces**: PascalCase com prefixo `I` (`IPlayerRepository.ts`)
- **Funções**: camelCase (`getPlayerInfo`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **Arquivos**: PascalCase para classes, camelCase para funções

### 2. Estrutura de Arquivos
- Um arquivo por classe/entidade
- Interfaces em arquivos separados
- Testes co-localizados com o código

### 3. Imports
- Imports absolutos usando aliases (`@domain/entities/Player`)
- Ordem: bibliotecas externas → internas → relativos

## Estratégia de Testes (TDD)

### 1. Tipos de Testes
- **Unit Tests**: Testes de unidades isoladas
- **Integration Tests**: Testes de integração entre camadas
- **API Tests**: Testes de endpoints HTTP

### 2. Estrutura de Testes
```
tests/
├── unit/               # Testes unitários
│   ├── domain/
│   ├── application/
│   └── shared/
├── integration/        # Testes de integração
│   ├── api/
│   └── repositories/
└── setup.ts           # Configuração global dos testes
```

### 3. Ferramentas de Teste
- **Jest**: Framework de testes
- **Supertest**: Testes de API HTTP
- **MSW**: Mock Service Worker para APIs externas

## Integração com APIs Externas

### 1. TibiaData API
- **Base URL**: `https://api.tibiadata.com/v4`
- **Endpoints**: Personagens, guilds, mundos
- **Rate Limiting**: Respeitar limites da API

### 2. CipSoft APIs (Futuro)
- **Character API**: Dados oficiais de personagens
- **World API**: Informações mundiais em tempo real
- **Marketplace API**: Dados de mercado

### 3. Estratégia de Cache
- Cache de respostas por tempo determinado
- Invalidação inteligente de cache
- Fallback para dados em cache

## Configuração do Ambiente

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Git

### Instalação
```bash
# Clone o repositório
git clone https://github.com/Mallfurion15/tibiaHelp-api.git

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp env.example .env

# Execute em modo de desenvolvimento
npm run dev

# Execute os testes
npm test
```

### Scripts Disponíveis
- `npm run dev` - Servidor de desenvolvimento com hot reload
- `npm run build` - Build de produção
- `npm run start` - Executa o build de produção
- `npm run test` - Executa testes
- `npm run test:watch` - Testes em modo watch
- `npm run test:coverage` - Cobertura de testes
- `npm run lint` - Linting do código
- `npm run lint:fix` - Correção automática de linting

## Variáveis de Ambiente

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

## Segurança

### 1. Validação de Dados
- Validação de entrada em todos os endpoints
- Sanitização de dados
- TypeScript para type safety

### 2. Rate Limiting
- Limitação de requisições por IP
- Diferentes limites para diferentes endpoints
- Headers informativos sobre limites

### 3. CORS
- Configuração adequada de CORS
- Validação de origens permitidas
- Headers de segurança

### 4. Error Handling
- Não exposição de informações sensíveis
- Logs estruturados de erros
- Respostas padronizadas de erro

## Monitoramento e Logs

### 1. Logging
- Logs estruturados com Winston
- Diferentes níveis de log (error, warn, info, debug)
- Rotação de logs

### 2. Métricas
- Métricas de performance
- Contadores de requisições
- Tempo de resposta por endpoint

### 3. Health Checks
- Endpoint de health check
- Verificação de dependências externas
- Status detalhado da aplicação

## Performance e Escalabilidade

### 1. Caching
- Cache de respostas da API
- Cache de dados computados
- Invalidação inteligente

### 2. Database (Futuro)
- Connection pooling
- Índices otimizados
- Queries eficientes

### 3. Load Balancing (Futuro)
- Múltiplas instâncias
- Distribuição de carga
- Health checks para load balancer

## Roadmap de Features

### Fase 1 - MVP (Atual)
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

---

Esta documentação será atualizada conforme o projeto evolui e novas features são implementadas.
