# Arquitetura do tibiaHelp Frontend

## Visão Geral

O tibiaHelp é uma plataforma web desenvolvida para fornecer ferramentas e informações em tempo real para jogadores de Tibia. O frontend é construído seguindo os princípios de **Clean Architecture**, **Domain-Driven Design (DDD)** e **Test-Driven Development (TDD)**.

## Tecnologias Utilizadas

- **React 18** - Biblioteca para interface de usuário
- **TypeScript** - Linguagem de programação tipada
- **Vite** - Build tool e servidor de desenvolvimento
- **Jest** - Framework de testes
- **Axios** - Cliente HTTP para comunicação com APIs

## Arquitetura Clean Architecture

### Camadas da Aplicação

```
src/
├── presentation/     # Camada de Apresentação (UI)
├── application/      # Camada de Aplicação (Casos de Uso)
├── domain/          # Camada de Domínio (Regras de Negócio)
├── infrastructure/  # Camada de Infraestrutura (Implementações Externas)
└── shared/         # Código Compartilhado
```

### Responsabilidades das Camadas

#### 1. Domain Layer (`src/domain/`)
- **Entidades**: Objetos de negócio com identidade única
- **Repositórios**: Interfaces que definem contratos para acesso a dados
- **Casos de Uso**: Regras de negócio específicas do domínio

#### 2. Application Layer (`src/application/`)
- **Casos de Uso**: Orquestração de operações entre camadas
- **DTOs**: Objetos de transferência de dados
- **Serviços de Aplicação**: Lógica de aplicação específica

#### 3. Infrastructure Layer (`src/infrastructure/`)
- **API Clients**: Implementação de comunicação HTTP
- **Repositórios**: Implementação concreta dos contratos de domínio
- **Configurações**: Setup de bibliotecas externas

#### 4. Presentation Layer (`src/presentation/`)
- **Componentes**: Componentes React reutilizáveis
- **Páginas**: Páginas da aplicação
- **Hooks**: Custom hooks para lógica de apresentação
- **Estilos**: CSS e estilos globais

#### 5. Shared Layer (`src/shared/`)
- **Tipos**: Interfaces e tipos TypeScript compartilhados
- **Utilitários**: Funções auxiliares
- **Constantes**: Valores constantes da aplicação

## Princípios DDD Aplicados

### 1. Bounded Contexts
- **Player Context**: Informações e operações relacionadas a personagens
- **Guild Context**: Operações relacionadas a guilds
- **Marketplace Context**: Dados de mercado e preços
- **World Context**: Informações mundiais e eventos

### 2. Aggregates
- **Player**: Personagem com suas estatísticas e informações
- **Guild**: Guild com membros e informações
- **Item**: Item com propriedades e preços

### 3. Value Objects
- **Experience**: Valor de experiência com validações
- **Level**: Nível com cálculos específicos
- **Coordinates**: Coordenadas do mundo

## Fluxo de Dados

```
User Interaction → Presentation → Application → Domain → Infrastructure → External API
```

1. **Usuário interage** com a interface
2. **Presentation Layer** captura a interação
3. **Application Layer** orquestra a operação
4. **Domain Layer** aplica regras de negócio
5. **Infrastructure Layer** executa operações externas
6. **Dados retornam** pelas mesmas camadas

## Estrutura de Pastas Detalhada

```
src/
├── application/
│   ├── usecases/           # Casos de uso da aplicação
│   └── dto/               # Data Transfer Objects
├── domain/
│   ├── entities/          # Entidades de domínio
│   │   ├── Player.ts
│   │   ├── Guild.ts
│   │   └── Item.ts
│   ├── repositories/      # Interfaces de repositórios
│   │   ├── IPlayerRepository.ts
│   │   └── IGuildRepository.ts
│   └── usecases/         # Casos de uso de domínio
│       ├── CalculateExperience.ts
│       └── GetPlayerInfo.ts
├── infrastructure/
│   ├── api/              # Clientes HTTP
│   │   ├── TibiaDataClient.ts
│   │   └── CipSoftClient.ts
│   └── repositories/     # Implementações de repositórios
│       ├── PlayerRepository.ts
│       └── GuildRepository.ts
├── presentation/
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Header.tsx
│   │   ├── PlayerCard.tsx
│   │   └── Calculator.tsx
│   ├── pages/           # Páginas da aplicação
│   │   ├── LandingPage.tsx
│   │   ├── PlayerPage.tsx
│   │   └── CalculatorPage.tsx
│   ├── hooks/           # Custom hooks
│   │   ├── usePlayer.ts
│   │   └── useCalculator.ts
│   └── styles/          # Estilos CSS
│       └── global.css
├── shared/
│   ├── types/           # Tipos compartilhados
│   │   ├── ApiResponse.ts
│   │   └── CommonTypes.ts
│   └── utils/           # Utilitários
│       ├── formatters.ts
│       └── validators.ts
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

## Convenções de Código

### 1. Nomenclatura
- **Componentes**: PascalCase (`PlayerCard.tsx`)
- **Hooks**: camelCase com prefixo `use` (`usePlayer.ts`)
- **Interfaces**: PascalCase com prefixo `I` (`IPlayerRepository.ts`)
- **Tipos**: PascalCase (`PlayerData`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### 2. Estrutura de Arquivos
- Um arquivo por componente/entidade
- Interfaces em arquivos separados
- Testes co-localizados com o código

### 3. Imports
- Imports absolutos usando aliases (`@domain/entities/Player`)
- Ordem: bibliotecas externas → internas → relativos

## Estratégia de Testes (TDD)

### 1. Tipos de Testes
- **Unit Tests**: Testes de unidades isoladas
- **Integration Tests**: Testes de integração entre camadas
- **Component Tests**: Testes de componentes React

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
- **React Testing Library**: Testes de componentes
- **MSW**: Mock Service Worker para APIs

## Roadmap de Features

### Fase 1 - MVP (Atual)
- [x] Estrutura base do projeto
- [x] Landing page
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

## Configuração do Ambiente

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Git

### Instalação
```bash
# Clone o repositório
git clone https://github.com/Mallfurion15/tibiaHelp.git

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Execute os testes
npm test
```

### Scripts Disponíveis
- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run test` - Executa testes
- `npm run test:watch` - Testes em modo watch
- `npm run test:coverage` - Cobertura de testes

## Considerações de Performance

### 1. Code Splitting
- Lazy loading de páginas
- Dynamic imports para componentes pesados

### 2. Caching
- Cache de dados da API
- Memoização de componentes
- Service Worker para cache offline

### 3. Bundle Optimization
- Tree shaking
- Minificação
- Compressão gzip

## Segurança

### 1. Validação de Dados
- Validação no frontend e backend
- Sanitização de inputs
- TypeScript para type safety

### 2. CORS
- Configuração adequada de CORS
- Validação de origens permitidas

### 3. Rate Limiting
- Limitação de requisições
- Debounce em inputs
- Cache de resultados

## Monitoramento e Logs

### 1. Error Tracking
- Captura de erros JavaScript
- Logs estruturados
- Métricas de performance

### 2. Analytics
- Tracking de uso das ferramentas
- Métricas de conversão
- Feedback dos usuários

---

Esta documentação será atualizada conforme o projeto evolui e novas features são implementadas.
